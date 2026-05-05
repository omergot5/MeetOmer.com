import Background from "@/components/Background";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";
import Skills from "@/components/Skills";

export default function HomePage(): JSX.Element {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      <Sidebar />
      <MobileNav />

      <main
        id="main-content"
        className="relative mx-auto max-w-5xl px-2 sm:px-4 lg:ml-[19rem] lg:mr-6 lg:max-w-none lg:pl-0 lg:pr-2 xl:mr-12"
      >
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}
