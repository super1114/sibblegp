import type { AppProps } from "next/app";

import "../styles/assets/fonticon/fonticon.css";
import "../styles/assets/keenicons/duotone/style.css";
import "../styles/assets/keenicons/outline/style.css";
import "../styles/assets/keenicons/solid/style.css";
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './assets/css/style.rtl.css'
 **/
import "../styles/assets/sass/style.scss";
import "../styles/assets/sass/plugins.scss";
import "../styles/assets/sass/style.react.scss";
import AuthLayout from "@/components/AuthLayout";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      )}
    </>
  );
}
