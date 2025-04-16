// Global Styles
import "../styles/globals.css";

// Next.js
import { type Metadata } from "next";

// Font
import { Lato } from "next/font/google";

// Components
import NavBar from "./_components/navBar";



const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Prism Venture",
  description: "Prism Venture offers premium services in Apparel, Jute Products and IT Solutions.",
  icons: [{ rel: "icon", url: "/prism-bd.webp" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={lato.className}>
      <body className="flex flex-col min-h-[100vh]">
        <NavBar />
        {children}
      </body>
    </html>
  );
}