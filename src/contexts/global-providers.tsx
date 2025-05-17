import type { ReactNode } from "react";
import { BrowserRouter } from "react-router";

type GlobalProviderProps = {
  children: ReactNode;
};

export const GlobalProviders = ({ children }: GlobalProviderProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
