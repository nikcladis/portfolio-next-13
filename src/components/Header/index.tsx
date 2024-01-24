import Container from "@/components/ui/container";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 flex justify-between">
        <Navigation />
      </header>
    </>
  );
};

export default Header;
