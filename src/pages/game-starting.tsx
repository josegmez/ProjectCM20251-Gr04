import { useEffect, useState } from "react";
import Button from "@/components/ui/buttons";
import { useNavigate } from "react-router";

export const GameStartingPage = () => {
  const [category, setCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  // TODO: Implement actual category
  useEffect(() => {
    setTimeout(() => {
      setCategory("Animales");
    }, 2000);
    setTimeout(() => {
      navigate("/game");
    }, 5000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-24">
      <h1 className="text-5xl font-secondary">El juego está por comenzar...</h1>

      <span className="text-xl">El barco de La Havana viene cargdo de...</span>

      {category && (
        <Button
          className="rounded-full"
          color="accent"
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
        >
          {category}
        </Button>
      )}
    </div>
  );
};
