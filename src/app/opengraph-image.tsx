import { ImageResponse } from 'next/og';

export const alt = 'ZynTech Labs | Custom Enterprise Software & AI';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #070b16 0%, #0c1830 50%, #070b16 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          fontFamily: 'sans-serif',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(20,184,166,0.35) 0%, rgba(6,182,212,0) 70%)',
            top: '150px',
            left: '350px',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(6,182,212,0.15)',
            border: '1px solid rgba(20,184,166,0.5)',
            padding: '10px 24px',
            borderRadius: '50px',
            fontSize: '18px',
            color: '#2dd4bf',
            fontWeight: 700,
            marginBottom: '30px',
            letterSpacing: '2px',
          }}
        >
          ENTERPRISE SOFTWARE &amp; AI
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: 900,
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: '1000px',
            marginBottom: '24px',
            background: 'linear-gradient(to right, #ffffff, #2dd4bf, #38bdf8)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          ZynTech Labs
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: '850px',
            lineHeight: 1.4,
          }}
        >
          Building scalable enterprise software, high-volume fintech engines, mobile apps and AI cloud solutions.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
