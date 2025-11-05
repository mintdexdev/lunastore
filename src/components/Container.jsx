import { twMerge } from 'tailwind-merge';

export default function Container({
  children,
  variant = 'default',
  className = '',
  ...props
}
) {
  let variantClass = '';

  if (variant === 'form') {
    return (
      <div className={twMerge(`max-w-[960px]  mx-auto`, className)} {...props}>
        {children}
      </div>
    );
  }

  switch (variant) {
    case 'text':
      variantClass = 'max-w-[60ch]';
      break;

    case 'noPadding':
      variantClass = 'max-w-[1920px]';
      break;

    default:
      variantClass = 'max-w-[1920px] px-16-80 ';
  }

  return (
    <div className={twMerge(`${variantClass} mx-auto`, className)} {...props}>
      {children}
    </div>
  );
}
