import "../styles/globals.css";
import Script from "next/script"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-H96PSEM1C4"}
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



