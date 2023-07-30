import Layout from '@/layout';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body className='dark'>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
