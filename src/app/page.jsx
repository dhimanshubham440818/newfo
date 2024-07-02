import About from "@/components/sectionCmp/About/About";
import Clients from "@/components/sectionCmp/Clients/Clients";
import Contact from "@/components/sectionCmp/Contact/Contact";
import DropEmail from "@/components/sectionCmp/DropEmail/DropEmail";
import EducationAndExperience from "@/components/sectionCmp/EducationAndExperience/EducationAndExperience";
import Hero from "@/components/sectionCmp/Hero/Hero";
import Pricing from "@/components/sectionCmp/Pricing/Pricing";
import Projects from "@/components/sectionCmp/Projects/Projects";
import RecentsWorks from "@/components/sectionCmp/RecentsWorks/RecentsWorks";
import ScrollToTop from "@/components/sectionCmp/ScrolllToTop/ScrollToTop";
import Services from "@/components/sectionCmp/Services/Services";
import Testimonials from "@/components/sectionCmp/Testimonials/Testimonials";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <RecentsWorks />
      <Clients />
      <DropEmail />
      <EducationAndExperience />
      <Pricing />
      <Testimonials />
      <Projects />
      <Contact />
      <ScrollToTop />
    </>
  );
}
