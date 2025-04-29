// RootLayout.js
import { Lato, Limelight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const lato = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const limelight = Limelight({
  variable: "--font-lime-light",
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${limelight.variable} antialiased mx-2`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
