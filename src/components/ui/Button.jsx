import * as React from "react";

import { cn } from "@utils/cn";

const buttonVariants = cn(
  "bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
);

const Button = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <button className={cn(buttonVariants, className)} ref={ref} {...props}>
      {children}
    </button>
  );
});
Button.displayName = "Button";

export { Button };
