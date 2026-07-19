import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ViewCanvas from "@/components/ViewCanvas";

const jakarta = Dosis({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Fizzi Soda",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-yellow-300">
        <Header />
        <main>
          {children}

          <ViewCanvas />
        </main>
      </body>
    </html>
  );
}
