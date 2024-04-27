import React from "react";
import { AppCore } from "./core";
import { App } from "./app";

import "@/app/css/global.css";

AppCore.setup(() => <React.StrictMode children={<App />} />);
