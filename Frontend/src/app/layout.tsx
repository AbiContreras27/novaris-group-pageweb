import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout";
import { Footer } from "@/components/layout/footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novarisgroup.com"),

  title: {
    default: "Novaris Group",
    template: "%s | Novaris Group",
  },

  description:
    "Empresa especializada en desarrollo de software, soporte técnico, infraestructura TI, redes empresariales, CCTV y ciberseguridad.",

  keywords: [
    "desarrollo de software",
    "empresa de software",
    "desarrollo web",
    "Next.js",
    "React",
    "soporte técnico",
    "mesa de ayuda",
    "infraestructura TI",
    "redes empresariales",
    "redes hogar",
    "cableado estructurado",
    "CCTV",
    "videovigilancia",
    "ciberseguridad",
    "consultoría TI",
    "Medellín",
    "Colombia",
    "Novaris Group",
  ],

  authors: [{ name: "Novaris Group" }],

  creator: "Novaris Group",

  publisher: "Novaris Group",

  manifest: "/manifest.webmanifest",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://novarisgroup.com",
    siteName: "Novaris Group",
    title: "Novaris Group",
    description: "Soluciones tecnológicas empresariales de alto nivel.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Novaris Group",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Novaris Group",
    description: "Tecnología que impulsa la evolución.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={poppins.variable}>
        
          <Navbar/>
          {children}
          <Footer/>
        
      </body>
    </html>
  );
}