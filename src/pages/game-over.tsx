import { Button } from "@/components/ui/buttons";
import { ChartIcon } from "@/components/ui/icons";
import { useNavigate } from "react-router";

export const GameOverPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-24">
      <h1 className="text-5xl font-bold font-secondary">La ronda terminó</h1>

      <img
        src="/images/image 13.png"
        alt=""
        className="w-[195px] h-[193px] object-contain pl-7"
      />
      <div className="flex flex-col items-center justify-center flex-1 gap-8">
        <p className="font-bold text-5xl">Ana</p>
        <p className="text-3xl text-white">
          Has perdido, <span className="font-bold capitalize">sapo</span> ya
          habia sido dicho por Juan Pablo
        </p>
      </div>
      <Button
        startContent={<ChartIcon />}
        className="text-black"
        onClick={() => navigate("/leaderboard")}
      >
        Posiciones
      </Button>
    </div>
  );
};
