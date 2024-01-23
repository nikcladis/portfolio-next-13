import Container from "@/components/ui/container";
import ProgressBar from "./ProgressBar";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 flex justify-between">
        <ProgressBar />
        <Navigation />
      </header>
    </>
  );
};

export default Header;
