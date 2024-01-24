import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { AOSInit } from "@/components/Aos";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Clinica Dental App",
  description: "clinica dental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="absolute -z-10 w-full tablet:h-screen  h-full ">
            <Image
              src={"/images/bg1.jpg"}
              alt="fondo"
              fill
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 50% 92%, 0 100%, 0 0)",
                opacity: ".8",
              }}
            />
          </div>
          <NextTopLoader color="#5700FF" showSpinner={false}></NextTopLoader>
          <AOSInit />
          {children}
        </Providers>
      </body>
    </html>
  );
}
