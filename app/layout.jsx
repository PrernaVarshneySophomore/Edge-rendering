import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../styles/globals.css'; // Pure CSS

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
      </body>
    </html>
  );
}
