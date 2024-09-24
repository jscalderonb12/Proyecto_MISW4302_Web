import type { Metadata } from "next";
import { Header } from "./components/Header";
import { SYSTEM } from "@/app/constants/system";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const { METADATA } = SYSTEM;

export const metadata: Metadata = {
  title: METADATA.TITLE,
  description: METADATA.DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={METADATA.APP_ICON} type="image/png" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
