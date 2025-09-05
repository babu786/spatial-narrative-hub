import { WebDevHero } from "@/components/WebDevHero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio"; 
import { Pricing } from "@/components/Pricing";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ContactWebDev } from "@/components/ContactWebDev";
import { NavbarWebDev } from "@/components/NavbarWebDev";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <NavbarWebDev />
      <div id="home">
        <WebDevHero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <ContactWebDev />
      </div>
    </div>
  );
};

export default Index;
