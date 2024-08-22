import { Inter } from "next/font/google";
import "./globals.css";
import SEO from "@/features/seo";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <SEO
          title="Sheetal Dadhich | Software Developer"
          description="Get funding for your startup from India's leading Revenue Based Financing platform. Get a soft sanction with no equity dilution."
          url="https://shetal.me/"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
