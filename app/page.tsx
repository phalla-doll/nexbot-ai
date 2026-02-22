import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-orange-500/30 selection:text-orange-100">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}