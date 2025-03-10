import './styles/globals.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import type { Metadata } from 'next';

export const metadata: 
Metadata = {
  title: 'aranyaadheu',
  description: "aranyaadheu's blog",
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon/apple-icon-180x180.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/apple-icon-180x180.png" />
      </head>
      <body className="min-h-screen bg-white dark:bg-[#212737] text-zinc-900 dark:text-zinc-100 font-sans antialiased">
        <div className="max-w-2xl mx-auto px-6 py-12">
          {children}
        </div>
      </body>
    </html>
  );
} 
