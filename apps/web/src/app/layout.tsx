// Styling
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://saturn.tech/widget.js" />
      </head>
      <body
        suppressHydrationWarning={true}
        className="bg-neutral-800 min-h-screen w-full font-inter"
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
