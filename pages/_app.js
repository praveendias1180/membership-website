import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import { studioTheme } from "../src/ui-components";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter";
import "../styles/reset.css";

import awsconfig from "../src/aws-exports";
Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return (
    <AmplifyProvider theme={studioTheme}>
      <Component {...pageProps} />
    </AmplifyProvider>
  );
}
export default MyApp
