import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 sm:flex sm:justify-between py-3 px-4 border-b backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="font-bold">nikcladis.dev</h1>
          <div className="hidden sm:flex items-center">
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
          <div className="sm:hidden">
            <Menu />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
