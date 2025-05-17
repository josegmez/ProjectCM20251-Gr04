import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/buttons";
import { PlayIcon, CloseIcon } from "@/components/ui/icons";
import LeaderboardTable from "@/components/ui/leaderboard-table";

export const LeaderboardPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  const handleOnNextRoundClick = () => {
    navigate("/game");
  };

  const handleOnExitClick = () => {
    navigate("/game-over");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          navigate("/game");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex flex-col items-center flex-1 gap-12">
      <header>
        <h1 className="text-5xl font-normal font-secondary">Puntuación</h1>
      </header>
      <main className="w-full">
        <LeaderboardTable
          data={[
            { name: "Jose", score: 8, diff: 4 },
            { name: "Juan Pablo", score: 6, diff: 3 },
            { name: "Luis", score: 4, diff: 3 },
            { name: "Ana", score: 4, diff: 0 },
            { name: "Daniel", score: 3, diff: 3 },
          ]}
        />
      </main>
      <footer className="flex flex-col items-center gap-4">
        <p className="text-2xl font-normal">
          Siguiente ronda en {countdown} segundo{countdown > 1 && "s"}...
        </p>
        <div className="w-full flex justify-between items-center">
          <Button color="accent" onClick={handleOnNextRoundClick}>
            <PlayIcon />
          </Button>
          <Button color="danger" onClick={handleOnExitClick}>
            <CloseIcon />
          </Button>
        </div>
      </footer>
    </section>
  );
};
