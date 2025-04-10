import "@/styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SocialCursor from "../components/SocialCursor";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SocialCursor />
      <Component {...pageProps} />
    </>
  );
}
