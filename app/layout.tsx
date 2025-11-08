import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jair Benítez | Full Stack Developer",
  description: "Portafolio profesional de Jair Benítez - Full Stack Developer especializado en TypeScript, Next.js, React, Node.js y más",
  keywords: ["Full Stack Developer", "Next.js", "React", "TypeScript", "Node.js", "Web Development"],
  authors: [{ name: "Jair Benítez" }],
  openGraph: {
    title: "Jair Benítez | Full Stack Developer",
    description: "Portafolio profesional de Jair Benítez",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale || 'es'} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
