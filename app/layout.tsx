import type { Metadata } from "next";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
config.autoAddCss = false;



export const metadata: Metadata = {
  title: 'Oumar Mimouni | Portfolio | Full Stack Software Engineer',
  description: 'full stack software engineer',
  openGraph: {
    title: 'Oumar Mimouni | Portfolio | Full Stack Software Engineer',
    description: 'full stack software engineer',
  }
}

const font = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${font.className}`}>
        <div className="pt-20">
          <Navbar />
          {children}
          <div className="h-20" />
          <Footer />
        </div>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""} />
      </body>
    </html>
  );
}
