import "../styles/index.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <><Layout>
      <Component {...pageProps} />
    </Layout> <style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Aladin;
  }

  * {
    box-sizing: border-box;
  }
`}</style></>
  );
}

export default MyApp;
