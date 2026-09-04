import React from 'react';
import { ImageCtaBanner } from '@/components/home/ImageCtaBanner';

export function CtaBanner() {
  return (
    <ImageCtaBanner
      bgClassName="cta_sec"
      heading="Ready to build your next AI-powered solution?"
      buttonText="Get Started Today"
      buttonHref="/contact"
    />
  );
}
