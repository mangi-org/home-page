import Layout from '@/layout';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon_16x16px.svg' />
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body className='dark'>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
