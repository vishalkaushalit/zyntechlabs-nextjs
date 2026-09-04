export const metadata = {
  title: 'ZynTech Labs CMS Studio (WordPress Alternative)',
  description: 'Manage blog posts, case studies, images, and Yoast SEO settings',
  robots: {
    index: false,
    follow: false,
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-[#0a0f1d]">
      {children}
    </div>
  );
}
