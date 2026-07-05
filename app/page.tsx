import LoadingScreen from "@/components/sections/LoadingScreen";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import TechOrbit from "@/components/sections/TechOrbit";
import Tools from "@/components/sections/Tools";
import GithubSection from "@/components/sections/GithubSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="relative bg-bg">
        <Hero />
        <FeaturedWork />
        <About />
        <Services />
        <TechOrbit />
        <Tools />
        <GithubSection />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
