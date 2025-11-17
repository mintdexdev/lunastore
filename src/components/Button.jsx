import { twMerge } from 'tailwind-merge';
import { Icon } from '@/components';

export default function Button({
  className = "",
  children = 'button',
  varient = 'round',
  type = 'button',
  square = false,
  icon = false,
  trailingIcon = false,
  disabled = false,
  ...props
}) {


  if (disabled) {
    // nocover/square
    if (varient === 'noCover') {
      className = `p-0 border-0 bg-transparent text-neutral-d ${className}`;
    } else if (varient = 'outline') {
      className = `bg-transparent text-neutral-d border-neutral-d ${className}`;
    }

    if (square) {
      className = `rounded-2xl ${className}`;
    }

    return (
      <button
        className={twMerge('w-full px-4 py-3 flex gap-1 items-center justify-center border rounded-full text-primary bg-tertiary-d border-tertiary-d', className)}
        type={type}
        disabled
      >
        {icon && <Icon name={icon} />}
        {children}
        {trailingIcon && <Icon name={trailingIcon} />}
      </button>
    )
  }

  // variant 

  if (varient === 'noCover') {
    className = `p-0 border-0 bg-transparent text-secondary hover:text-tertiary hover:bg-transparent hover:border-transparent ${className}`;
  } else if (varient === 'outline') {
    className = `bg-transparent text-secondary border-secondary hover:text-tertiary hover:bg-tertiary-e hover:border-tertiary ${className}`;
  }

  if (square) {
    className = `rounded-2xl ${className}`;
  }

  return (
    <button
      className={twMerge('w-full px-4 py-3 flex gap-1 items-center justify-center border rounded-full text-primary bg-tertiary border-tertiary duration-300 ease-out transition-discrete hover:bg-tertiary-b hover:border-tertiary-b active:brightness-75', className)}
      type={type}
      {...props}
    >
      {icon && <Icon name={icon} />}
      {varient === 'noCover'
        ? <span className='hover:underline '>{children}</span>
        : children}
      {trailingIcon && <Icon name={trailingIcon} />}
    </button>
  )
}