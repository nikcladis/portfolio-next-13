import Cubic from "@/components/Spline/Cubic";
import Container from "@/components/ui/container";
import Hero from "./Hero";
import Projects from "./Projects";

const Main = () => {
  return (
    <main className="relative">
      <Container>
        <Hero />
        <Projects />
        <Cubic />
      </Container>
    </main>
  );
};

export default Main;
