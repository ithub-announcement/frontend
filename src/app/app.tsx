import React from "react";
import { withProviders } from "./providers";
import { AppRouting } from "@/pages";

export const App = withProviders((): React.ReactElement => {
  return <AppRouting />;
});
