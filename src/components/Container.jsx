import React from 'react'
import { twMerge } from 'tailwind-merge';

export default function Container({
  children,
  variant = 'default',
  className = '',
  ...props
}
) {
  let variantClass = '';

  switch (variant) {
    case 'text':
      variantClass = 'max-w-[60ch]';
      break;
    case 'form':
      variantClass = 'max-w-[960px]';
      break;
    default:
      variantClass = 'max-w-[1920px]';
  }

  return (
    <div className={twMerge(`${variantClass} px-16-80 mx-auto`, className)} {...props}>
      {children}
    </div>
  );
}
