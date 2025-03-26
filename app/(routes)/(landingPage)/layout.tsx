import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export default async function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (isUserAuthenticated) {
    redirect("/dashboard");
  }

  return (
    <div
      className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white w-full h-auto`}
    >
      {children}
    </div>
  );
}
