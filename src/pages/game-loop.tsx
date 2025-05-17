import { useNavigate } from "react-router";

import { Button } from "@/components/ui/buttons";
import { Countdown } from "@/components/ui/countdown";
import { FireIcon, MicIcon } from "@/components/ui/icons";

export const GameLoopPage = () => {
  const navigate = useNavigate();

  const handleOnComplete = () => {
    navigate("/game-over");
  };

  return (
    <div className="flex flex-col items-center flex-1 gap-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Categoría</h1>
        <Button color="accent" className="rounded-full font-normal">
          Animales
        </Button>
      </div>
      <span className="inline-flex items-center gap-2 font-bold text-2xl">
        <span className="text-fire-red">
          <FireIcon />
        </span>
        2
      </span>
      <Countdown
        seconds={10}
        className="text-5xl font-bold"
        onComplete={handleOnComplete}
      />
      <span className="inline-flex items-center gap-3 font-bold text-2xl animate-pulse">
        <MicIcon width={30} height={30} />
        Escuchando...
      </span>
      <div className="flex flex-col items-center justify-center gap-4 mt-10">
        <span className="text-2xl font-bold">Turno de</span>
        <span className="bg-primary-900 text-3xl rounded-3xl py-4 px-12 font-secondary">
          Jugador 1
        </span>
      </div>
    </div>
  );
};
