import { AppRoutes } from "@/components/controllers/app-routes";
import { GlobalProviders } from "@/contexts/global-providers";

export const App = () => {
  return (
    <GlobalProviders>
      <AppRoutes />
    </GlobalProviders>
  );
};
