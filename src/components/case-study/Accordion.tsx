'use client';

import React, { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({
  items,
  variant = 'custom',
}: {
  items: AccordionItem[];
  variant?: 'custom' | 'tarzan';
}) {
  const [openIndex, setOpenIndex] = useState(0);
  const wrapperClass = variant === 'tarzan' ? 'accordion accordion-tarzan' : 'accordion custom-accordion';
  const buttonClass = variant === 'tarzan' ? 'accordion-button' : 'accordion-button';

  return (
    <div className={wrapperClass}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className="accordion-item" key={i}>
            <h3 className="accordion-header m-0">
              <button
                type="button"
                className={`${buttonClass} ${isOpen ? 'active' : ''}`}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                {variant === 'tarzan' && (
                  <>
                    <span className="plus-h" />
                    <span className="plus-v" />
                  </>
                )}
              </button>
            </h3>
            {isOpen && <div className="accordion-body">{item.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}
