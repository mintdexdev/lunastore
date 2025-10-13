import { useState } from 'react';
import { TextField } from '@/components'

export default function SplitButton({
  label = "Input label here",
  inputId = "input",
  inputType = "text",
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div className='flex gap-1'>
      <TextField
        id={inputId}
        label={label}
        type={inputType}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="rounded-[2rem_0.25rem_0.25rem_2rem]"
      />
      <button className={`text-c-1 px-4 rounded-[0.25rem_2rem_2rem_0.25rem] 
        ${focused ? 'bg-c-3' : 'bg-c-2a'}`}
        type="button">Apply</button>
    </div>
  )
}
