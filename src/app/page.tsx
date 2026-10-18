import HeroSection from "@/components/HeroSection";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="site-main min-h-screen font-Inter">
      <Nav />
      <section id="home">
        <HeroSection />
      </section>
    </main>
  );
}
