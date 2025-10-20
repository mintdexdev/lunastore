import { twMerge } from "tailwind-merge";

export default function Button({
  varient = "default",
  type = "button",
  children = "button content",
  className,
  ...props
}) {

  if (varient === "outline") {
    return (
      <button
        className={twMerge("block h-10 px-4 w-full rounded-full border", className)}
        type={type}
        {...props}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      className={twMerge("block h-10 px-4 w-full rounded-full bg-c-2a text-white", className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
