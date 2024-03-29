import ReactDOM from "react-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { HelmetProvider } from 'react-helmet-async';
import "./index.css";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
    {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
  </QueryClientProvider>,
  document.getElementById("root")
);
