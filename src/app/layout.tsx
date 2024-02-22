import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog - Jhonatan Guerrero",
  description:
    "¡Bienvenidos al mundo de Jhonatan Guerrero, un apasionado cazador de oportunidades y escritor aficionado! Sumérgete en su universo de cuentos cortos y grandes historias, donde cada palabra te transporta a nuevos horizontes. Descubre cómo este desarrollador de software encuentra en la escritura su refugio creativo y comparte con nosotros sus fascinantes creaciones literarias.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
