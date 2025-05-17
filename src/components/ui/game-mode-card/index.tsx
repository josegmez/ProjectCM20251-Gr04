import { cn } from "@/utils/cn";
import type { GameModeCardProps } from "./types";
import { motion } from "motion/react";

export const GameModeCard = ({
  children,
  imageSrc,
  onClick,
  imagePosition = "left",
  className,
}: GameModeCardProps) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className={cn(
        "flex items-center relative border-8 border-primary-900 bg-primary-800 rounded-4xl p-6 text-left",
        imagePosition === "left" && "pl-20",
        imagePosition === "right" && "pr-20",
        className
      )}
      onClick={onClick}
    >
      <img
        src={imageSrc}
        alt="Game Mode"
        className={cn(
          "w-32 absolute",
          imagePosition === "left" && "-left-10",
          imagePosition === "right" && "-right-10"
        )}
      />
      {children}
    </motion.div>
  );
};
