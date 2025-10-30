export default function Chips({ text, ...props }) {
  return (
    <div className='border px-2 rounded-lg bg-white border-c-2a' {...props}>{text}</div>
  )
}
