import Cubic from "@/components/Spline/Cubic";
import Container from "@/components/ui/container";
import Hero from "./Hero";

const Main = () => {
  return (
    <main className="relative">
      <Container>
        <Hero />
        <section className="flex items-center justify-center h-screen">
          <p className="z-10">Hello</p>
        </section>
        <Cubic />
      </Container>
    </main>
  );
};

export default Main;
