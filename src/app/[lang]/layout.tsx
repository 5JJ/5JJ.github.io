import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PageProps } from "./types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return [
    {
      lang: "kr",
    },
  ];
}

export default function RootLayout({
  children,
  params,
}: Readonly<
  {
    children: React.ReactNode;
  } & PageProps
>) {
  const { lang } = params;
  return (
    <html lang={lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
