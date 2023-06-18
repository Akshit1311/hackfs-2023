import PackageProvider from "../components/PackageProvider/PackageProvider";
import "../styles/globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://saturn.tech/widget.js" async />
      </head>
      <body
        suppressHydrationWarning={true}
        className="bg-neutral-800 min-h-screen w-full font-inter"
      >
        <PackageProvider>
          <main>{children}</main>
        </PackageProvider>
      </body>
    </html>
  );
}
