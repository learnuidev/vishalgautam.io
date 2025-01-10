import type { Metadata } from "next";
import { Alegreya, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/navbar";
import { ClerkProvider } from "@/lib/clerk/clerk-provider";
import { Footer } from "@/components/footer";

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
      <html lang="en">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <body
            className={`${geistSans.variable} ${geistMono.variable} ${alegreya.variable} ${inter.className}  antialiased relative`}
          >
            <NavBar />

            <div className="p-4 max-w-3xl mx-auto">{children}</div>

            <Footer />
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
