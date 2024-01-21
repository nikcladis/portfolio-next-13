import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookMarked } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-col p-4 h-screen max-h-[90vh]">
      <p className="mt-12 z-10 text-4xl font-bold">
        <span className="block mt-5">Creative</span>
        <span className="block mt-5">Frontend</span>
        <span className="block mt-5">Developer.</span>
      </p>
      <div className="flex flex-wrap gap-3 z-10 mt-[20%] max-w-[150px]">
        <Badge variant="secondary" className="text-md w-fit">
          React
        </Badge>
        <Badge variant="secondary" className="text-md w-fit">
          Next
        </Badge>
        <Badge variant="secondary" className="text-md w-fit">
          TypeScript
        </Badge>
        <Badge variant="secondary" className="text-md w-fit">
          UI/UX
        </Badge>
      </div>
      <Button
        variant="default"
        size="lg"
        className="w-fit self-end mt-[15%] z-10 text-lg"
      >
        <BookMarked className="mr-2 h-4 w-4" />
        Projects
      </Button>
    </section>
  );
};

export default Hero;
