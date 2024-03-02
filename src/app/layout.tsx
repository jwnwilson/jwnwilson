import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noel Wilson",
  description: "Noel Wilson - Software Engineer!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png+xml" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <meta name="description" content="Noel Wilson, software engineer"></meta>
        <meta name="keywords" content="noel, wilson, noel wilson, python, typescript, developer, software, engineer"></meta>
        <meta name="author" content="Noel Wilson"></meta>
        <title>Noel Wilson</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
