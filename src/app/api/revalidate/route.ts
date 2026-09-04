import { revalidateTag, revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET;
    if (secret && req.headers.get('x-revalidate-secret') !== secret) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    const body = await req.json();

    // Revalidate specific tags based on changed document type
    const docType = body?._type;
    const slug = body?.slug?.current;

    if (docType === 'post') {
      revalidateTag('post', 'default');
      revalidatePath('/blog');
      revalidatePath('/sitemap.xml');
      if (slug) revalidatePath(`/blog/${slug}`);
    } else if (docType === 'caseStudy') {
      revalidateTag('caseStudy', 'default');
      revalidatePath('/case-studies');
      revalidatePath('/sitemap.xml');
      if (slug) revalidatePath(`/case-study/${slug}`);
    } else if (docType === 'page') {
      revalidateTag('page', 'default');
      revalidatePath('/sitemap.xml');
      if (slug) revalidatePath(`/${slug}`);
    } else if (docType === 'siteSettings') {
      revalidateTag('siteSettings', 'default');
      revalidatePath('/', 'layout');
      revalidatePath('/sitemap.xml');
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      docType,
      slug,
    });
  } catch (err: any) {
    console.error('Revalidation error:', err);
    return NextResponse.json({ message: 'Error revalidating', error: err?.message }, { status: 500 });
  }
}
