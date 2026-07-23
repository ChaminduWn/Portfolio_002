import Script from "next/script";
import page from "../content/home.json";

export default function HomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: page.styles }} />
      <main dangerouslySetInnerHTML={{ __html: page.body }} />
      <Script src="/legacy-home.js" strategy="afterInteractive" />
    </>
  );
}
