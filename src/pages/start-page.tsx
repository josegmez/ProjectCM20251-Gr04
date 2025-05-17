import { useNavigate } from "react-router";

import { PlayIcon } from "@/components/ui/icons";

export const StartPage = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/players");
  }

  return (
    <>
      <div
        className="relative -top-18 flex flex-col items-center justify-center flex-1 gap-24"
        onClick={handleClick}
      >
        <h1 className="text-6xl font-secondary">Categorías</h1>
        <div className="flex items-center justify-center rounded-full size-64 border-[32px] border-primary-900 bg-primary-800">
          <PlayIcon width={160} height={160} className="text-white" />
        </div>
        <span className="text-2xl font-bold">¡Toca para comenzar!</span>
      </div>
      <footer className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4 bg-white">
        <img src="/images/image 14.png" alt="Logo" className="h-18" />
      </footer>
    </>
  );
};
