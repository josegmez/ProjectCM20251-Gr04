import { MenuIcon, DeleteIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/buttons";
import { motion } from "motion/react";

type PlayerBoxProps = {
  player: Player;
  onUpdate?: (player: Player) => void;
  onRemove?: (id: number) => void;
  className?: string;
};

export const PlayerBox = ({
  className,
  player,
  onRemove,
  onUpdate,
}: PlayerBoxProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className={`w-full flex flex-row items-center justify-between rounded-xl border-4 border-primary-900 bg-primary-800 p-4 ${className}`}
    >
      <input
        className="max-w-[200px] w-fit text-lg font-bold outline-none bg-transparent"
        type="text"
        value={player.name}
        onChange={(e) => {
          const updatedPlayer = { ...player, name: e.target.value };
          onUpdate?.(updatedPlayer);
        }}
        placeholder="Player Name"
        autoComplete="off"
        autoFocus
      />
      <div className="flex items-center justify-center">
        <Button isIconOnly>
          <MenuIcon className="w-6 h-6 text-primary-200" />
        </Button>
        <Button isIconOnly onClick={() => onRemove?.(player.id)}>
          <DeleteIcon className="w-6 h-6 text-primary-200" />
        </Button>
      </div>
    </motion.div>
  );
};
