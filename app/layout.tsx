import type { Metadata } from "next";
import "../style/globals.css";
import { Providers } from "@/providers";

export const metadata: Metadata = {
  title: "Joba Web3",
  description: "Explore talents!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-gopher`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
