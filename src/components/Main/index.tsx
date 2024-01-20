import Cubic from "@/components/Spline/Cubic";

const Main = () => {
  return (
    <main className="relative">
      <section className="flex items-center justify-center h-screen">
        <p className="z-10">Hello</p>
      </section>
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
