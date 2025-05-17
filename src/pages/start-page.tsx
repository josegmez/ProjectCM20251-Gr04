import { PlayIcon } from "@/components/ui/icons";
import { PlayerBox } from "@/components/ui/player-box";
import { useNavigate } from "react-router";

export const StartPage = () => {
  const navigate = useNavigate();

  function handleTouchEnd() {
    navigate("/game-modes");
  }

  return (
    <div
      className="flex flex-col items-center justify-center flex-1 gap-24"
      onTouchEnd={handleTouchEnd}
    >
      <h1 className="text-6xl font-secondary">Categorías</h1>
      <div className="flex items-center justify-center rounded-full size-64 border-[32px] border-primary-900 bg-primary-800">
        <PlayIcon width={160} height={160} className="text-white" />
      </div>
      <span className="text-2xl font-bold">¡Toca para comenzar!</span>
      <PlayerBox name={"Jugador uno"}></PlayerBox>
    </div>
  );
};
