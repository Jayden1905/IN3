import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "twinline-flex twitems-center twjustify-center twwhitespace-nowrap twrounded-md twtext-sm twfont-medium twtransition-colors focus-visible:twoutline-none focus-visible:twring-1 focus-visible:twring-gray-950 disabled:twpointer-events-none disabled:twopacity-50 dark:focus-visible:twring-gray-300",
  {
    variants: {
      variant: {
        default:
          "twbg-gray-900 twtext-gray-50 twshadow hover:twbg-gray-900/90 dark:twbg-gray-50 dark:twtext-gray-900 dark:hover:twbg-gray-50/90",
        destructive:
          "twbg-red-500 twtext-gray-50 twshadow-sm hover:twbg-red-500/90 dark:twbg-red-900 dark:twtext-gray-50 dark:hover:twbg-red-900/90",
        outline:
          "twborder twborder-gray-200 twbg-white twshadow-sm hover:twbg-gray-100 hover:twtext-gray-900 dark:twborder-gray-800 dark:twbg-gray-950 dark:hover:twbg-gray-800 dark:hover:twtext-gray-50",
        secondary:
          "twbg-gray-100 twtext-gray-900 twshadow-sm hover:twbg-gray-100/80 dark:twbg-gray-800 dark:twtext-gray-50 dark:hover:twbg-gray-800/80",
        ghost: "hover:twbg-gray-100 hover:twtext-gray-900 dark:hover:twbg-gray-800 dark:hover:twtext-gray-50",
        link: "twtext-gray-900 twunderline-offset-4 hover:twunderline dark:twtext-gray-50",
      },
      size: {
        default: "twh-9 twpx-4 twpy-2",
        sm: "twh-8 twrounded-md twpx-3 twtext-xs",
        lg: "twh-10 twrounded-md twpx-8",
        icon: "twh-9 tww-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
