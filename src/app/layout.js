import localFont from 'next/font/local';
import './globals.css';
import { Nav, Footer } from '../components';

const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
});

const zodiak = localFont({
  src: './fonts/Zodiak-Regular.woff2',
  variable: '--font-zodiak',
});

export const metadata = {
  title: 'Arkitect — Innovative Architecture',
  description: 'Creating timeless and sustainable architectural designs that inspire and endure.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${zodiak.variable} antialiased overflow-x-clip bg-dark`}>
        <main className="p-2.5 md:p-3 lg:p-4 bg-dark font-manrope md:relative md:z-50 will-change-transform">
          <Nav />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
