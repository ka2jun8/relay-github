import "../../styles/globals.css";
import { RelayEnvironmentProvider } from "react-relay";
import { Suspense } from "react";
import RelayEnvironment from "../relay/RelayEnvironment";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { RecoilRoot } from "recoil";

const SafeHydrate = dynamic(() => import("../components/SafeHydrate"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <RecoilRoot>
        <SafeHydrate>
          <Suspense fallback={"Loading..."}>
            <Component {...pageProps} />
          </Suspense>
        </SafeHydrate>
      </RecoilRoot>
    </RelayEnvironmentProvider>
  );
}

export default MyApp;
