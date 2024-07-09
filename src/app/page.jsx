import About from "@/components/sectionCmp/About/About";
import AcademicJourney from "@/components/sectionCmp/AcademicJourney/AcademicJourney";
import Contact from "@/components/sectionCmp/Contact/Contact";
import Experience from "@/components/sectionCmp/Experience/Experience";
import Hero from "@/components/sectionCmp/Hero/Hero";
import Projects from "@/components/sectionCmp/Projects/Projects";
import ScrollToTop from "@/components/sectionCmp/ScrolllToTop/ScrollToTop";
import Skills from "@/components/sectionCmp/Skills/Skills";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <AcademicJourney />
      {/* <RecentsWorks /> */}
      {/* <Clients /> */}
      {/* <DropEmail /> */}
      <Experience />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <Projects />
      <Contact />
      <ScrollToTop />
    </>
  );
}
