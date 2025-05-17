import { MenuIcon, DeleteIcon } from "../icons";
import Button from "@/components/ui/buttons";

type PlayerBoxProps = {
  className?: string;
  name: string;
};

export const PlayerBox = ({ className, name }: PlayerBoxProps) => {
  return (
    <div
      className={`flex flex-row items-center justify-between w-60 h-20 rounded-xl border-4 border-primary-900 bg-primary-800 px ${className}`}
    >
      <h2 className="text-lg font-bold">{name}</h2>
      <div className="flex items-center justify-center p-2">
        <Button isIconOnly>
          <MenuIcon className="w-6 h-6 text-primary-200" />
        </Button>
        <Button isIconOnly>
          <DeleteIcon className="w-6 h-6 text-primary-200" />
        </Button>
      </div>
    </div>
  );
};
