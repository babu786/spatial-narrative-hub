import { Hero3D } from "@/components/Hero3D";
import { About3D } from "@/components/About3D";
import { Skills3D } from "@/components/Skills3D";
import { Contact3D } from "@/components/Contact3D";
import { Navbar3D } from "@/components/Navbar3D";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar3D />
      <div id="home">
        <Hero3D />
      </div>
      <div id="about">
        <About3D />
      </div>
      <div id="skills">
        <Skills3D />
      </div>
      <div id="contact">
        <Contact3D />
      </div>
    </div>
  );
};

export default Index;
