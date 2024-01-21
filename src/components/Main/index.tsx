import Cubic from "@/components/Spline/Cubic";
import Hero from "./Hero";

const Main = () => {
  return (
    <main className="relative">
      <Hero />
      <section className="flex items-center justify-center h-screen">
        <p className="z-10">Hello</p>
      </section>
      <div className="fixed inset-0">
        <Cubic />
      </div>
    </main>
  );
};

export default Main;
