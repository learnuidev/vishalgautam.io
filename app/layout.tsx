import type { Metadata } from "next";
import { Alegreya, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/navbar";
import { ClerkProvider } from "@/lib/clerk/clerk-provider";
import { Footer } from "@/components/footer";
import { I18NextHtmlProvider } from "@/libs/i18n-next/i18n-next-html-provider";
import { TheDock } from "@/components/the-dock";
import { ControlButtons } from "@/components/control-buttons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin-ext"],
});

const alegreya = Alegreya({ subsets: ["latin"], variable: "--font-alegreya" });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vishal Gautam",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <I18NextHtmlProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${alegreya.variable} ${inter.className}  antialiased flex flex-col h-screen`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />

            <div className="flex-grow">
              <div className="p-4 max-w-3xl mx-auto">{children}</div>
            </div>

            <TheDock>
              <ControlButtons />
            </TheDock>

            <Footer />
          </ThemeProvider>
        </body>
      </I18NextHtmlProvider>
    </ClerkProvider>
  );
}
