import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import "./globals.css";

export const metadata = {
  title: "Edmilson Oliveira | Desenvolvedor Web Full Stack",
  description: "Portfólio de Edmilson Oliveira, desenvolvedor web full stack focado em experiências digitais premium, acessibilidade e inovação tecnológica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/landing-page.jpg" type="image/jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-purple-500/30">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

