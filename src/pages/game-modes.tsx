import { GameModeCard } from "@/components/ui/game-mode-card";
import { FireIcon } from "@/components/ui/icons";
import { useNavigate } from "react-router";

export const GameModesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center flex-1 gap-12">
      <h1 className="text-5xl font-bold font-secondary">Modos de Juego</h1>
      <GameModeCard
        onClick={() => navigate("/game-modes/random")}
        imageSrc="/images/image 11.png"
      >
        Deja a Checho decirdir una categoría aleatoria por tí!
      </GameModeCard>
      <GameModeCard
        imagePosition="right"
        onClick={() => navigate("/game-modes/normal")}
        imageSrc="/images/image 9.png"
      >
        Tú y tus amigos eligen las categorías con las que desean jugar. Checho
        te juzga!
      </GameModeCard>
      <GameModeCard
        onClick={() => navigate("/game-modes/hardcore")}
        imageSrc="/images/image 10.png"
      >
        <p>
          Checho está enojado, demuestra que puedes ganarle!
          <b className="inline-flex gap-2">
            Hardcore Mode <FireIcon />
          </b>
        </p>
      </GameModeCard>
      <span className="text-lg font-bold">
        Selecciona el que más te guste y que empiece la diversión
      </span>
    </div>
  );
};
