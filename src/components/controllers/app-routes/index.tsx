import { Route, Routes } from "react-router";
import { AppLayout } from "@/layouts/app-layout";
import { GameModesPage } from "@/pages/game-modes";
import { LeaderboardPage } from "@/pages/leaderboard";
import { StartPage } from "@/pages/start-page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<StartPage />} />
        <Route path="/game-modes" element={<GameModesPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Route>
    </Routes>
  );
};
