import page from "../../content/ecosands.json";

export const metadata = {
  title: "EcoSands | Chamindu W.N",
};

export default function EcoSandsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: page.styles }} />
      <main dangerouslySetInnerHTML={{ __html: page.body }} />
    </>
  );
}
