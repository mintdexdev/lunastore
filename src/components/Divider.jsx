export default function Divider({ horizontal = false }) {

  if (horizontal) {
    return (
      <div className='w-[1px] h-full bg-helper4' />
    )
  }
  return (
    <div className='h-[1px] bg-helper4' />
  )
}