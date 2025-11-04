import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function TextField({
  id = 'input',
  label = 'label',
  type = 'text',
  className = '',
  ...props
}) {
  const [value, setValue] = useState('');

  return (
    <div className='relative w-full' >
      <label className={`px-1 absolute left-3.5 -top-2.5 text-sm bg-primary [&:has(+input:focus)]:text-c-3`}
        htmlFor={id}>{label}</label>
      <input
        className={twMerge('bg-primary w-full h-12 rounded-xl border px-4 text-lg focus:outline-c-3', className)}
        type={type}
        id={id}
        name={id}

        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </div>
  )
}
