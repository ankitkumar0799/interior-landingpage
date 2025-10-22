import "./globals.css";

export const metadata = {
  title: "Illusion Site — Starter",
  description: "Cinematic, scroll-driven illusions with Next.js",
  openGraph: { title: "Illusion Site — Starter", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-display antialiased">{children}</body>
    </html>
  );
}
