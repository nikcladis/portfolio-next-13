import Cubic from "@/components/Spline/Cubic";
import Container from "@/components/ui/container";
import Hero from "./Hero";
import Projects from "./Projects";

const Main = () => {
  return (
    <main className="relative">
      <Hero />
      <Projects />
      {/* <Cubic /> */}
    </main>
  );
};

export default Main;
