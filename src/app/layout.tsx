import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Sheetal Dadhich</title>
        <meta name="description" content="Software developer with expertise in modern web technologies, focusing on creating high-performance and user-friendly applications." />
        <meta name="keywords" content="Sheetal Dadhich, software developer, web development, frontend developer, modern web technologies, high-performance applications" />

        <meta property="og:title" content="Sheetal Dadhich | Software Developer" />
        <meta property="og:description" content="Software developer with expertise in modern web technologies, focusing on creating high-performance and user-friendly applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shetal.me" />
        <meta property="og:image" content="https://shetal.me/link-preview.png" />
        <meta property="og:image" content="https://example.com/your-preview-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sheetal Dadhich | Software Developer" />
        <meta name="twitter:description" content="Software developer with expertise in modern web technologies, focusing on creating high-performance and user-friendly applications." />
        <meta name="twitter:image" content="https://shetal.me/link-preview.png" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
