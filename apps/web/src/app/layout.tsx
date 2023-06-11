// Styling
import "../styles/globals.css";

// Common
import Header from "../components/common/Header";

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
