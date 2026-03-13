import type { Metadata } from "next";
import { Libre_Baskerville, Playfair_Display, Source_Sans_3, Noto_Sans_Ethiopic, Geist } from 'next/font/google';
import "./globals.css";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import { ReadingProgress } from "@/components/ui/atoms/ReadingProgress";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const notoEthiopic = Noto_Sans_Ethiopic({
  subsets: ['ethiopic'],
  variable: '--font-ethiopic',
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: "Exclusive Report | Power. Markets. Africa.",
  description: "Premium digital media institution delivering deep analysis on Africa.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = await draftMode();

  return (
    <html 
      lang="en" 
      data-theme="ocean" 
      suppressHydrationWarning
      className={cn(libreBaskerville.variable, playfairDisplay.variable, sourceSans.variable, notoEthiopic.variable, "font-sans", geist.variable)}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('ex-theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (!theme && supportDarkMode) theme = 'ocean-dark';
                  if (!theme) theme = 'ocean';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <ReadingProgress />
        <header className="fixed top-6 right-6 z-[60]">
          <ThemeSwitch />
        </header>
        <main className="flex-1">
          {children}
        </main>
        {isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
