import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/UI/navbar";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import theme from "../styles/theme";
import { InjectedConnector, StarknetProvider } from "@starknet-react/core";

function MyApp({ Component, pageProps }: AppProps) {
  const connectors = [
    new InjectedConnector({ options: { id: "argent-x" } }),
    new InjectedConnector({ options: { id: "braavos" } }),
  ];

  return (
    <>
      <StarknetProvider connectors={connectors}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Starkbet.id</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/visuals/StarknetIdLogo.png" />
          </Head>{" "}
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </StarknetProvider>
    </>
  );
}

export default MyApp;
