export default function TextField(
  {
    htmlFor = 'input',
    label = "label",
    type = "text",
  }
) {
  return (
    <div className='relative'>
      <label className='px-1 absolute transition-all -top-2.5 left-3.5 text-sm bg-c-1'

        htmlFor={htmlFor}>{label}</label>
      <input
        className='w-full h-12 border rounded-lg px-4 text-lg focus-visible:outline-c-3 '
        type={type}
        id={htmlFor}
        name=""
      />
    </div>
  )
}
