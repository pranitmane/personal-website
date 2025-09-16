'use client';

import { useEffect, useState } from 'react';

const RehypePrettyCodeCopy = () => {
  useEffect(() => {
    const copyButtons = document.querySelectorAll('.rehype-pretty-copy');
    copyButtons.forEach((button) => {
      (button as HTMLButtonElement).onclick = () => {
        const text = button.getAttribute('data') ?? '';
        navigator.clipboard.writeText(text);
        button.classList.add('rehype-pretty-copied');
        setTimeout(() => button.classList.remove('rehype-pretty-copied'), 3000);
      };
    });
  }, []);

  return null;
};

export default RehypePrettyCodeCopy;
