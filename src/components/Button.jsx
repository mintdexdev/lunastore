import { twMerge } from "tailwind-merge";

export default function Button({
  varient = "default",
  type = "button",
  children = "button content",
  className,
  ...props
}) {
  return (
    <button
      className={twMerge("h-10 px-4 w-full rounded-full bg-c-2a text-white", className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
