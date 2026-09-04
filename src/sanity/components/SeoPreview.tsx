import React, { useState } from 'react';
import { useFormValue, type ObjectInputProps } from 'sanity';

interface SeoValue {
  metaTitle?: string;
  metaDescription?: string;
}

const PATH_PREFIX: Record<string, string> = {
  post: 'blog/',
  caseStudy: 'case-study/',
  page: '',
};

export function SeoPreviewInput(props: ObjectInputProps<SeoValue>) {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  const docType = useFormValue(['_type']) as string | undefined;
  const docTitle = useFormValue(['title']) as string | undefined;
  const slugCurrent = useFormValue(['slug', 'current']) as string | undefined;

  const metaTitle = props.value?.metaTitle;
  const metaDescription = props.value?.metaDescription;

  const title = metaTitle || docTitle || 'Untitled';
  const description =
    metaDescription ||
    'Add a meta description above to control how this page appears in Google search results.';
  const prefix = docType ? PATH_PREFIX[docType] ?? '' : '';
  const path = slugCurrent ? `${prefix}${slugCurrent}` : 'your-page-slug';

  const titleLength = title.length;
  const descLength = description.length;
  const isTitleGood = titleLength >= 40 && titleLength <= 60;
  const isDescGood = descLength >= 120 && descLength <= 160;

  return (
    <>
      <div
        style={{
          background: '#0f172a',
          border: '1px solid rgba(45, 212, 191, 0.2)',
          borderRadius: 12,
          padding: 20,
          marginBottom: 16,
          color: '#e2e8f0',
          fontFamily: 'inherit',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #1f2937',
            paddingBottom: 12,
            marginBottom: 16,
          }}
        >
          <span style={{ fontWeight: 600, fontSize: 14, color: '#fff' }}>
            Google Search Snippet Preview
          </span>
          <div
            style={{
              display: 'flex',
              background: '#111827',
              borderRadius: 8,
              padding: 4,
              border: '1px solid #1f2937',
              fontSize: 12,
            }}
          >
            <button
              type="button"
              onClick={() => setDevice('desktop')}
              style={{
                padding: '4px 10px',
                borderRadius: 6,
                border: 'none',
                cursor: 'pointer',
                background: device === 'desktop' ? '#2dd4bf' : 'transparent',
                color: device === 'desktop' ? '#000' : '#9ca3af',
                fontWeight: device === 'desktop' ? 600 : 400,
              }}
            >
              Desktop
            </button>
            <button
              type="button"
              onClick={() => setDevice('mobile')}
              style={{
                padding: '4px 10px',
                borderRadius: 6,
                border: 'none',
                cursor: 'pointer',
                background: device === 'mobile' ? '#2dd4bf' : 'transparent',
                color: device === 'mobile' ? '#000' : '#9ca3af',
                fontWeight: device === 'mobile' ? 600 : 400,
              }}
            >
              Mobile
            </button>
          </div>
        </div>

        <div
          style={{
            background: '#202124',
            borderRadius: 8,
            padding: 16,
            maxWidth: device === 'mobile' ? 380 : '100%',
            margin: device === 'mobile' ? '0 auto' : undefined,
            border: device === 'mobile' ? '1px solid #374151' : undefined,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 12,
              color: '#bdc1c6',
              marginBottom: 4,
            }}
          >
            <span
              style={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                background: '#2dd4bf',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 9,
                color: '#000',
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              Z
            </span>
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              zyntechlabs.io › {path}
            </span>
          </div>
          <div
            style={{
              color: '#8ab4f8',
              fontSize: 18,
              fontWeight: 500,
              marginBottom: 4,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: '#bdc1c6',
              fontSize: 13,
              lineHeight: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 10,
            marginTop: 16,
            paddingTop: 12,
            borderTop: '1px solid #1f2937',
            fontSize: 12,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(17, 24, 39, 0.6)',
              padding: '8px 10px',
              borderRadius: 8,
              border: '1px solid #1f2937',
            }}
          >
            <span>Title length</span>
            <span style={{ fontWeight: 600, color: isTitleGood ? '#34d399' : '#fbbf24' }}>
              {titleLength} / 60
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(17, 24, 39, 0.6)',
              padding: '8px 10px',
              borderRadius: 8,
              border: '1px solid #1f2937',
            }}
          >
            <span>Description length</span>
            <span style={{ fontWeight: 600, color: isDescGood ? '#34d399' : '#fbbf24' }}>
              {descLength} / 160
            </span>
          </div>
        </div>
      </div>

      {props.renderDefault(props)}
    </>
  );
}
