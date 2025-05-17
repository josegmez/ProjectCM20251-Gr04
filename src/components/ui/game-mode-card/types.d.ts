export type GameModeCardProps = {
  imageSrc: string;
  imagePosition?: "left" | "right";
  children: ReactNode;
  onClick: () => void;
  className?: string;
};
