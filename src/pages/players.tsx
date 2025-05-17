import { useState } from "react";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/buttons";
import { PlayIcon, PlusIcon } from "@/components/ui/icons";
import { PlayerBox } from "@/components/ui/player-box";
import { Reorder } from "motion/react";

export const PlayersPage = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState<Player[]>([]);

  const handleAddPlayer = () => {
    const newPlayerId = Math.max(0, ...players.map((p) => p.id)) + 1;
    const newPlayer: Player = {
      id: newPlayerId,
      name: "Jugador " + newPlayerId,
    };
    setPlayers((prev) => [...prev, newPlayer]);
  };

  const handleRemovePlayer = (id: number) => {
    setPlayers((prev) => prev.filter((player) => player.id !== id));
  };

  const handleUpdatePlayer = (player: Player) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === player.id ? { ...p, name: player.name } : p))
    );
  };

  return (
    <section className="w-full flex flex-col items-center flex-1 gap-12">
      <header>
        <h1 className="text-5xl font-normal font-secondary text-center">
          Agrega los jugadores
        </h1>
      </header>
      <main className="flex flex-col gap-4 w-full max-w-4xl">
        <Reorder.Group values={players} onReorder={setPlayers}>
          {players.map((player) => (
            <Reorder.Item value={player} key={player.id}>
              <PlayerBox
                player={player}
                className="mb-4"
                onRemove={handleRemovePlayer}
                onUpdate={handleUpdatePlayer}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </main>
      <footer className="flex flex-col items-center gap-8 max-w-4xl">
        <Button isRounded startContent={<PlusIcon />} onClick={handleAddPlayer}>
          Agregar jugador
        </Button>
        <div>
          <Button color="accent" onClick={() => navigate("/game-modes")}>
            <PlayIcon />
          </Button>
        </div>
      </footer>
    </section>
  );
};
