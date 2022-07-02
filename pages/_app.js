import "../styles/globals.css";
import Script from "next/script"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-H96PSEM1C4`}
      />

      <Script id="test" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-H96PSEM1C4');
  `}</Script>

      <Component {...pageProps} />;
    </>
  )
}

export default MyApp;



