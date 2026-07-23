import page from "../../content/born-to-roam.json";

export const metadata = {
  title: "Born to Roam | Chamindu W.N",
};

export default function BornToRoamPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: page.styles }} />
      <main dangerouslySetInnerHTML={{ __html: page.body }} />
    </>
  );
}
