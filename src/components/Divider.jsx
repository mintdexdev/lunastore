export default function Divider(
  { horizontal = false,
    thickness = "1px"
  }
) {

  if (horizontal) {
    return (
      <div className={`w-[${thickness}] bg-helper4`} />
    )
  }
  return (
    <div className='h-[1px] bg-helper4' />
  )
}