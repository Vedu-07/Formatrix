import type { Metadata } from "next";
import "./globals.css";
import { Inter, DM_Sans } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster";
const dm_sans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Formatrix - Form Builder",
  description: "AI Form Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white ${dm_sans.className} ${inter.className} antialiased`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
