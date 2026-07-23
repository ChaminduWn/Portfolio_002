import page from "../../content/ape-mehewara.json";

export const metadata = {
  title: "Ape Mehewara | Chamindu W.N",
};

export default function ApeMehewaraPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: page.styles }} />
      <main dangerouslySetInnerHTML={{ __html: page.body }} />
    </>
  );
}
