import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import ProgressBar from "./ProgressBar";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-20 sm:flex sm:justify-between pt-4 pb-3 px-4 border-b backdrop-blur-md">
        <ProgressBar />
        <Container>
          <div className="flex items-center justify-between">
            <h1 className="hidden sm:flex font-bold">nikcladis.dev</h1>
            <Button variant="ghost" size="icon" className="sm:hidden">
              <Menu />
            </Button>
            <div className="flex items-center">
              <Button variant="ghost" size="icon">
                <a
                  href="https://www.github.com/nikcladis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
                </a>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
