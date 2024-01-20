import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const Header = () => {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="flex items-center justify-between backdrop-blur-md">
          <h1 className="font-bold">nikcladis.dev</h1>
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
  );
};

export default Header;
