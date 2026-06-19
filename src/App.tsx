/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Features from './components/Features';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="bg-background text-on-background font-sans selection:bg-[#dbe1ff] selection:text-[#00184a] min-h-screen">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Features />
        <AboutUs />
        <Courses />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
