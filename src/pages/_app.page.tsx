import "../../styles/globals.css";
import { RelayEnvironmentProvider } from "react-relay";
import { Suspense } from "react";
import RelayEnvironment from "../relay/RelayEnvironment";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { RecoilRoot } from "recoil";
import { ErrorBoundary } from "../components/ErrorBoundaries";

const SafeHydrate = dynamic(() => import("../components/SafeHydrate"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <ErrorBoundary>
        <RelayEnvironmentProvider environment={RelayEnvironment}>
          <RecoilRoot>
            <Suspense fallback={"Loading..."}>
              <Component {...pageProps} />
            </Suspense>
          </RecoilRoot>
        </RelayEnvironmentProvider>
      </ErrorBoundary>
    </SafeHydrate>
  );
}

export default MyApp;
