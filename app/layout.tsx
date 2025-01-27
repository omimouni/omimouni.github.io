import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
config.autoAddCss = false;



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
