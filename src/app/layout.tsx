import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdilaziz Nasir - Full Stack Developer",
  description: "Professional portfolio of Abdilaziz Nasir - Full Stack Developer specializing in Flutter, Next.js, React.js, C#, ASP.NET, and modern web technologies.",
  keywords: ["Full Stack Developer", "Flutter", "Next.js", "React.js", "C#", "ASP.NET", "Portfolio"],
  authors: [{ name: "Abdilaziz Nasir" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script 
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        ></script>
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-gradient-to-br from-gray-900 via-black to-gray-900`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
