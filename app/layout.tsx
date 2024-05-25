import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
// import { Toaster } from "react-hot-toast";
import "./globals.css";
import "@uploadthing/react/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Blog ~ A blog post for developers",
  description: "Created by Anas Yakubu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* <Toaster position="top-center" toastOptions={{ duration: 2000 }} /> */}
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
