import type { Metadata } from 'next';
import './globals.css';
import AppShell from './app-shell';

export const metadata: Metadata = {
  title: 'DocCircle - Doctor Consultation Platform',
  description: 'AI-Powered B2B Doctor Consultation Platform for Rural India',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
