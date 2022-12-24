import Layout from "../components/Layout";
import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>{" "}
    </AnimatePresence>
  );
}

export default MyApp;
