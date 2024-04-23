import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "@/Provider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akerele Taiwo 11/4/2024 ",
  description: "This is my first nextjs 14 project it is a movie site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
