import Button from "@/components/ui/buttons";
import { PlayIcon } from "@/components/ui/icons";
import LeaderboardTable from "@/components/ui/leaderboard-table";
import { useNavigate } from "react-router";

export const LeaderboardPage = () => {
  const navigate = useNavigate();

  const handleOnNextRoundClick = () => {
    navigate("/game");
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-24">
      <LeaderboardTable />
      <Button
        onClick={handleOnNextRoundClick}
        className="absolute top-4 right-4"
      >
        <PlayIcon className="w-4 h-4" />
        <span className="ml-2">Next Round</span>
      </Button>
    </div>
  );
};
