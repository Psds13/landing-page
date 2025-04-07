import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Solução de tecnologia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ynnothivix.jpg" type="img/jpg" />
        {/* ou, se estiver usando png: type="image/png" */}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
