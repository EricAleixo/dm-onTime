import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DM on Time",
  description: "APP criado pra monitoramento de presença de alunos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
