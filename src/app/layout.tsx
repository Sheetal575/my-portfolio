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
          description="Frontend expert delivering responsive, efficient web application with modern technologies and intuitive user interfaces. "
          url="https://shetal.me/"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
