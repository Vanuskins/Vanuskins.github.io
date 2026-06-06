import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-[#030303] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
