import { useMemo } from "react";
import { Outlet, useLocation } from "react-router";

import { cn } from "@/utils/cn";

export const AppLayout = () => {
  const pathname = useLocation().pathname;

  const isPageBgFail = useMemo(() => {
    return pathname === "/game-over";
  }, [pathname]);

  return (
    <main
      className={cn(
        "relative max-w-[700px] w-screen px-10 pb-10 pt-20 text-center flex flex-col items-center min-h-screen flex-1",
        isPageBgFail ? "bg-danger" : "bg-primary"
      )}
    >
      <Outlet />
    </main>
  );
};
