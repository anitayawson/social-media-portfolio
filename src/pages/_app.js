import "@/styles/globals.css";
import SocialCursor from "../components/SocialCursor";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SocialCursor />
      <Component {...pageProps} />
    </>
  );
}
