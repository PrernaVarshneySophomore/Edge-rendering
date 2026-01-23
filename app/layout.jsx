import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../styles/globals.css'; // Pure CSS
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Edge E-Commerce',
  description: 'Edge-rendered e-commerce frontend',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="root-body">
        <Navbar />
        <main className="main-content">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
