import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import myimage from "../app/Component/mylufi.jpeg"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Freelancing Hub",
  description: "Welcome to the freelancing hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href={myimage} sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
