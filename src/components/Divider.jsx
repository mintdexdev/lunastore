export default function Divider(
  {
    horizontal = false,
    thickness = "1px",
    className = "",
  }
) {

  if (horizontal) {
    return (
      <div className={`w-[${thickness}] bg-helper4 ${className}`} />
    )
  }
  return (
    <div className={`h-[1px] bg-helper4 ${className}`} />
  )
}