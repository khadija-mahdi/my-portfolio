import localFont from "next/font/local";
import "./globals.css";
import { Sora } from "@next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add the weights you need
});

export const metadata = {
  title: "Khadija Mahdi Portfolio",
  description: "Portfolio Of Khadija Mahdi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${sora.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
