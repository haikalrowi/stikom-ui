import { Size } from "../../";
import clsx from "clsx";
import React from "react";

export interface TextProps extends React.ComponentPropsWithoutRef<"p"> {
  size?: Size;
}

export function Text({ size = "md", ...props }: TextProps) {
  return (
    <p
      {...props}
      className={clsx(
        size === "xs" && "text-xs",
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg",
      )}
    />
  );
}
