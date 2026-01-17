import "./globals.css";
import { Inter, Roboto } from "next/font/google";
 
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto", weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
