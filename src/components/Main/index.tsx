import Hero from "./Hero";
import Projects from "./Projects";

const Main = () => {
  return (
    <main className="relative">
      <Hero />
      <Projects />
      <div className="z-20 h-screen bg-gray-500"></div>
    </main>
  );
};

export default Main;
