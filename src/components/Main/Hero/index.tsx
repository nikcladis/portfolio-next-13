import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="flex flex-col p-4 h-screen">
      <p className="mt-12 z-10 text-4xl font-bold">
        <span className="block mt-5">Dedicated</span>
        <span className="block mt-5">Front-End</span>
        <span className="block mt-5">Engineer.</span>
      </p>
      <div className="flex flex-wrap gap-3 z-10 mt-10 max-w-[60%]">
        <Badge variant="default" className="text-lg w-fit">
          React
        </Badge>
        <Badge variant="default" className="text-lg w-fit">
          Next
        </Badge>
        <Badge variant="default" className="text-lg w-fit">
          TypeScript
        </Badge>
      </div>
    </section>
  );
};

export default Hero;
