import { cn } from "@/utils/cn";
import { FireIcon } from "@/components/ui/icons";

const LeaderboardTable = ({
  className,
  data,
}: {
  className?: string;
  data: { name: string; score: number; diff: number }[];
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full h-full",
        className
      )}
    >
      {data.map((item, index) => (
        <LeaderboardTableItem
          key={index}
          name={item.name}
          score={item.score}
          diff={item.diff}
          className="mb-4"
        />
      ))}
    </div>
  );
};

const LeaderboardTableItem = ({
  name,
  score,
  diff,
  className,
}: {
  name: string;
  score: number;
  diff: number;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full flex flex-row items-center justify-between rounded-2xl bg-primary-900 p-4",
        className
      )}
    >
      <h2 className="text-2xl font-bold">{name}</h2>
      <div className="flex items-center justify-center gap-2">
        <span className="text-fire-red">
          <FireIcon />
        </span>
        <div className="flex items-start justify-center gap-1">
          <p className="text-2xl font-bold">{score}</p>
          <p
            className={cn(
              "text-sm font-bold",
              diff > 0 ? "text-electric-green" : "text-red-500"
            )}
          >
            +{diff}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardTable;
