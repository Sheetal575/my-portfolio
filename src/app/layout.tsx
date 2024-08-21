import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Sheetal Dadhich | Software Developer</title>
        <meta name="description" content="Software developer with expertise in modern web technologies, focusing on creating high-performance and user-friendly applications." />
        <meta name="keywords" content="Sheetal Dadhich, software developer, web development, frontend developer, modern web technologies, high-performance applications" />
        <meta property="og:title" content="Sheetal Dadhich | Software Developer" />
        <meta property="og:title" content='Sheetal Dadhich | Software Developer' />
        <meta property="og:description" content="Software developer with expertise in modern web technologies, focusing on creating high-performance and user-friendly applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`shetal.me`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content={'/link-preview.png'}
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content='Sheetal Dadhich | Software Developer' />
        <meta name="twitter:description" content="Software developer with expertise in modern web technologies, focusing on creating high-performance and user-friendly applications." />
        <meta
          name="twitter:image:src"
          content="/link-preview.png"
        />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
