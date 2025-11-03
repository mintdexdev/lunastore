export default function Divider(
  {
    horizontal = false,
    thickness = '1px',
    className = '',
  }
) {

  if (horizontal) {
    return (
      <div className={`w-[${thickness}] bg-neutral-d ${className}`} />
    )
  }
  return (
    <div className={`h-[1px] bg-neutral-d ${className}`} />
  )
}