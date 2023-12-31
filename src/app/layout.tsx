"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { store, persistor } from "../../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Providers } from "../../redux/provider";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <PersistGate loading={null} persistor={persistor}>
            <Nav />
            {children}
            <Footer />
          </PersistGate>
        </Providers>
      </body>
    </html>
  );
}
