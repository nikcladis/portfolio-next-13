import Container from "@/components/ui/container";
import ProgressBar from "./ProgressBar";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-20 sm:flex sm:justify-between">
        <Container>
          <ProgressBar />
          <Navigation />
        </Container>
      </header>
    </>
  );
};

export default Header;
