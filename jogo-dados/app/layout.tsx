import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jogo de Dados",
  description: "Jogo de dados para 2 jogadores em React + Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
