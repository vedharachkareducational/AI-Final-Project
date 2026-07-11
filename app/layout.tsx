import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VertexSoft Proposal Generator',
  description: 'Generate a tailored B2B proposal for your institution in seconds. Powered by VertexSoft Labs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
