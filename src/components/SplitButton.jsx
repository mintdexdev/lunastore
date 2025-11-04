import { useState } from 'react';
import { TextField } from '@/components';
import { SPLIT_BUTTON } from '@/app/constants/ui.constants';

export default function SplitButton({
  varient = SPLIT_BUTTON.VARIENT.DEFAULT,
  label = 'Input label here',
  inputId = 'input',
  inputType = 'text',
  children
}) {
  const [focused, setFocused] = useState(false)

  if (varient === SPLIT_BUTTON.VARIENT.ROUNDED_FULL) {
    return (
      <div className='flex gap-1'>
        <TextField
          id={inputId}
          label={label}
          type={inputType}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className='rounded-[2rem_0.25rem_0.25rem_2rem]'
        />
        <button className={`text-secondary px-4 rounded-[0.25rem_2rem_2rem_0.25rem] whitespace-nowrap 
        ${focused ? 'bg-tertiary' : 'border-secondary'}`}
          type='button'>{children}</button>
      </div>
    )
  }

  return (
    <div className='flex gap-1'>
      <TextField
        id={inputId}
        label={label}
        type={inputType}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className='rounded-[0.75rem_0.25rem_0.25rem_0.75rem]'
      />
      <button className={`text-secondary px-4 rounded-[0.25rem_0.75rem_0.75rem_0.25rem] whitespace-nowrap border
        ${focused ? 'bg-tertiary' : 'border-secondary'}`}
        type='button'>{children}</button>
    </div>
  )
}
