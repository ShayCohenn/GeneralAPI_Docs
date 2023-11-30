import { ModeToggle } from "@/components/ui/darkmode-toggle";
import { Github } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="h-16 z-[99999] w-full dark:bg-neutral-950 bg-neutral-100 fixed flex justify-between items-center border-b border-secondary">
      <Image
        src="logo2.svg"
        alt="Logo"
        height={200}
        width={200}
        className="dark:invert sm:block hidden"
      />
      <Image
        src="logo3.svg"
        alt="Logo"
        height={50}
        width={50}
        className="dark:invert sm:hidden block"
      />
      <div className="flex items-center gap-x-2">
        <a
          className="hover:border-b border-primary cursor-pointer"
          href="#home"
        >
          Home
        </a>
        <a
          className="hover:border-b border-primary cursor-pointer"
          href="#docs"
        >
          Docs
        </a>
        <a
          className="hover:border-b border-primary cursor-pointer"
          href="#about"
        >
          About
        </a>
        <a href="https://github.com/ShayCohenn/GeneralAPI_Docs" target="_blank">
          <Github className="h-10 w-10 p-2 cursor-pointer rounded-full hover:bg-neutral-300 dark:hover:bg-neutral-800" />
        </a>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
