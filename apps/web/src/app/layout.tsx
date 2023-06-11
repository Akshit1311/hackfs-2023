import Header from "../components/common/Header";
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
      <body>
        <Header />
        <main className="bg-base min-h-screen w-full text-white max-w-screen-8xl mx-auto font-inter">
          {children}
        </main>
      </body>
    </html>
  );
}
