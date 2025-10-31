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
 
    default:
      variantClass = 'max-w-[1920px]';
  }

  return (
    <div className={twMerge(`${variantClass} px-16-80 mx-auto`, className)} {...props}>
      {children}
    </div>
  );
}
