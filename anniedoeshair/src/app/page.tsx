import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import Instagram from "./components/Instagram"

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <Services />
      <Instagram />
      <About />
      <Footer />
    </main>
  );
}
