import { Route, Routes } from "react-router";
import { AppLayout } from "@/layouts/app-layout";
import { GameModesPage } from "@/pages/game-modes";
import { LeaderboardPage } from "@/pages/leaderboard";
import { StartPage } from "@/pages/start-page";
import { GameStartingPage } from "@/pages/game-starting";
import { GameLoopPage } from "@/pages/game-loop";
import { GameOverPage } from "@/pages/game-over";
import { PlayersPage } from "@/pages/players";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<StartPage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/game-modes" element={<GameModesPage />} />
        <Route path="/game-modes/random" element={<GameStartingPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/game" element={<GameLoopPage />} />
        <Route path="/game-over" element={<GameOverPage />} />
      </Route>
    </Routes>
  );
};
