import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky flex justify-center top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <MobileNav /> */}
          <NavLink to="/" className="font-bold text-xl">
            Rakhel Cakra K.S
          </NavLink>
        </div>
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" className={`text-sm font-medium transition-colors`}>
            Home
          </NavLink>
          {/* <NavLink
            to="/about"
            className={`text-sm font-medium transition-colors`}>
            About
          </NavLink> */}
          <NavLink
            to="/projects"
            className={`text-sm font-medium transition-colors `}>
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={`text-sm font-medium transition-colors`}>
            Contact
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          {/* <ThemeToggle /> */}
          <Button asChild size="sm" className="hidden md:inline-flex">
            <NavLink to="/contact">Hire Me</NavLink>
          </Button>
        </div>
      </div>
    </header>
  );
}
