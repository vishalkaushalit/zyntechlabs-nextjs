#!/usr/bin/env bash
# Weekly backup of the Sanity dataset (all Blog Posts, Pages, Case Studies, Categories,
# Authors, Site Settings, and uploaded images/assets) — this project has no other database,
# Sanity is the single source of truth for content.
#
# Run manually to test:  ./scripts/backup-sanity.sh
# Intended to run from cron once a week — see the AWS runbook's "Weekly Backups" step.
#
# Requires:
#   - SANITY_AUTH_TOKEN   a Sanity API token with read access (manage.sanity.io -> API -> Tokens)
#   - SANITY_DATASET      defaults to "production"
#   - BACKUP_S3_BUCKET    an S3 bucket name to upload the backup to (off-server storage)
#   - The Sanity CLI needs Node >=22.12 even though the app itself runs on Node 20 —
#     point SANITY_CLI_NODE_BIN at that Node's bin directory (e.g. an nvm install) if the
#     system default `node` is older.

set -euo pipefail

DATASET="${SANITY_DATASET:-production}"
BACKUP_DIR="${BACKUP_DIR:-$HOME/sanity-backups}"
TIMESTAMP="$(date +%F)"
FILENAME="${DATASET}-${TIMESTAMP}.tar.gz"

if [ -z "${SANITY_AUTH_TOKEN:-}" ]; then
  echo "SANITY_AUTH_TOKEN is not set — aborting." >&2
  exit 1
fi

if [ -n "${SANITY_CLI_NODE_BIN:-}" ]; then
  export PATH="${SANITY_CLI_NODE_BIN}:${PATH}"
fi

mkdir -p "$BACKUP_DIR"

echo "[$(date)] Exporting Sanity dataset '${DATASET}'..."
npx sanity dataset export "$DATASET" "${BACKUP_DIR}/${FILENAME}" --overwrite

if [ -n "${BACKUP_S3_BUCKET:-}" ]; then
  echo "[$(date)] Uploading to s3://${BACKUP_S3_BUCKET}/${FILENAME}..."
  aws s3 cp "${BACKUP_DIR}/${FILENAME}" "s3://${BACKUP_S3_BUCKET}/${FILENAME}"
fi

# Keep the last 4 local copies (roughly a month) — S3 is the durable long-term copy.
echo "[$(date)] Pruning old local backups..."
ls -1t "${BACKUP_DIR}"/"${DATASET}"-*.tar.gz 2>/dev/null | tail -n +5 | xargs -r rm --

echo "[$(date)] Done: ${FILENAME}"
