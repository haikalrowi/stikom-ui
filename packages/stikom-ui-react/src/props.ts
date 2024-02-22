import { DefaultColors } from "tailwindcss/types/generated/colors";

export type ColorScheme = keyof Pick<
  DefaultColors,
  "gray" | "blue" | "green" | "cyan" | "yellow" | "red"
>;

export type Size = "xs" | "sm" | "md" | "lg";
