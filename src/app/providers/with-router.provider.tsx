import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "@/app/router/config.ts";

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter {...RouterConfig}>
      <Suspense>{component()}</Suspense>
    </BrowserRouter>
  );
