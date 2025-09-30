import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetBrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Luna",
  description: "Online store for luna",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
