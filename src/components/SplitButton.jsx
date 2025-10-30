import { useState } from 'react';
import { TextField } from '@/components'
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
        <button className={`text-c-1 px-4 rounded-[0.25rem_2rem_2rem_0.25rem] whitespace-nowrap 
        ${focused ? 'bg-c-3' : 'bg-c-2a'}`}
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
        className='rounded-[0.5rem_0.25rem_0.25rem_0.5rem]'
      />
      <button className={`text-c-1 px-4 rounded-[0.25rem_0.5rem_0.5rem_0.25rem] whitespace-nowrap 
        ${focused ? 'bg-c-3' : 'bg-c-2a'}`}
        type='button'>{children}</button>
    </div>
  )
}
