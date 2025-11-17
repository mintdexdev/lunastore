import { twMerge } from 'tailwind-merge';

export default function Button({
  varient = 'default',
  type = 'button',
  children = 'button content',
  className,
  ...props
}) {

  if (varient === 'noCover') {
    return (
      <button
        className={twMerge('block h-10 px-4 w-full', className)}
        type={type}
        {...props}
      >
        {children}
      </button>
    )
  }

  if (varient === 'outline') {
    return (
      <button
        className={twMerge('block h-10 px-4 w-full rounded-full border', className)}
        type={type}
        {...props}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      className={twMerge('block h-10 px-4 w-full rounded-full bg-tertiary text-primary', className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
