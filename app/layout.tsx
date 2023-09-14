import Layout from '@/layout';
import './globals.css';
import { PWACompoent } from '@/components';
import { Roboto } from 'next/font/google';

export const metadata = {
  themeColor: 'black',
  manifest: '/manifest.json',
};

const robots = Roboto({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

/**
 * Renders the root layout for the application.
 *
 * @param {Object} children - The children components to be rendered within the layout.
 * @return {JSX.Element} The JSX element representing the root layout.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body className={'dark ' + robots.className}>
        <Layout>{children}</Layout>
        <PWACompoent />
      </body>
    </html>
  );
}
