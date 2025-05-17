import { motion } from "motion/react";
import type { ButtonProps } from "./types";
import { cn } from "@/utils/cn";

const colorMappingClass: Record<NonNullable<ButtonProps["color"]>, string> = {
  default: "bg-white text-primary",
  primary: "bg-primary-800 text-white",
  accent: "bg-accent text-black",
  danger: "bg-red-600 text-white",
};

export const Button = ({
  children,
  className,
  classNames,
  color = "default",
  isRounded = false,
  isIconOnly = false,
  startContent,
  isLoading,
  isDisabled,
  ...props
}: ButtonProps): React.ReactElement<ButtonProps> => {
  return (
    <motion.button
      className={cn(
        "flex items-center justify-center gap-2 shadow-md shadow-primary/20",
        "text-2xl",
        colorMappingClass[color],
        isIconOnly ? "p-1 bg-transparent text-primary-300" : "px-6 py-4",
        isRounded ? "rounded-full" : "rounded-2xl",
        className,
        classNames?.button
      )}
      disabled={isDisabled}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {startContent && (
        <span
          className={cn(
            "flex items-center justify-center",
            isDisabled && "text-gray-400",
            classNames?.startContent
          )}
        >
          {startContent}
        </span>
      )}
      {isLoading ? (
        <span className="h-full aspect-square animate-spin rounded-full border-2 border-t-2 border-t-transparent border-gray-200 dark:border-gray-600"></span>
      ) : (
        children
      )}
    </motion.button>
  );
};
