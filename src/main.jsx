import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./app/appcss/App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RouterProvider } from "react-router-dom";
import { TestingRoutes } from "./config/router/Testing.routes";
import { Button, NextUIProvider, Tooltip } from "@nextui-org/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProgressBar from "./components/common/ProgressBar/ProgressBar";
import ButtonSpecial from "./components/common/ButtonSpecial";
import { Mic01Icon, VoiceIcon } from "hugeicons-react";

const queryClient = new QueryClient({});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NextUIProvider>
          <ProgressBar />
          <RouterProvider router={TestingRoutes} />

        </NextUIProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
