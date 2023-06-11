import Header from "../components/common/Header";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className="bg-base min-h-screen w-full font-inter"
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
