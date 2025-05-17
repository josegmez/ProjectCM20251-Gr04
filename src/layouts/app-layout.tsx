import { Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <main className="max-w-[700px] px-10 py-10 text-center flex flex-col items-center min-h-screen flex-1">
      <Outlet />
    </main>
  );
};
