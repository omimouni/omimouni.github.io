import "./globals.css";
import { Nunito } from "next/font/google";
import LenisProvider from "@/components/lenis-provider";
import NoiseBackground from "@/components/noise-background";


const font = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <LenisProvider>
          {/* <Navbar /> */}
          <div id="content">
            <div className="">{children}</div>
          </div>
        </LenisProvider>
        <NoiseBackground />
      </body>
    </html>
  );
}
