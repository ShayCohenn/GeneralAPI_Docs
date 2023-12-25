import { ModeToggle } from "@/components/ui/darkmode-toggle";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="h-16 z-[99999] w-full dark:bg-neutral-950 
    bg-neutral-100 fixed flex justify-between items-center
     shadow-xl shadow-black/10 dark:shadow-white/10">
      <a href="#home">
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
      </a>
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
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
