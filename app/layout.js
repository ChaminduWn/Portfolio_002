import "./globals.css";

export const metadata = {
  title: "Chamindu W.N — Full-Stack Software Engineer",
  description:
    "Portfolio of Chamindu W.N, a full-stack software engineer building web, mobile, AI, and IoT solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
