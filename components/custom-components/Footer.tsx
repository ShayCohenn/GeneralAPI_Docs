import { CircleUserRound, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div
      className="text-neutral-950 dark:text-neutral-100 fixed bottom-0 w-full bg-neutral-100 h-32
    dark:bg-neutral-950 flex flex-col flex-wrap gap-y-2 py-2 justify-center xl:items-center"
    >
      <a
        className="border-none hover:underline underline-offset-4 flex"
        target="_blank"
        href="https://github.com/ShayCohenn/GeneralAPI"
      >
        <Github className="mx-1" />
        API&apos;s Github repo
      </a>
      <a
        className="border-none hover:underline underline-offset-4 flex"
        target="_blank"
        href="https://github.com/ShayCohenn/GeneralAPI_Docs"
      >
        <Github className="mx-1" />
        Docs Github repo
      </a>
      <a
        className="border-none hover:underline underline-offset-4 flex"
        target="_blank"
        href="https://www.linkedin.com/in/shaycohenn1/"
      >
        <Linkedin className="mx-1" />
        <span className="mt-1">LinkedIn</span>
      </a>
      <a
        className="border-none hover:underline underline-offset-4 flex"
        target="_blank"
        href="https://portfolio-rho-five-94.vercel.app/"
      >
        <CircleUserRound className="mx-1" />
        Portfolio
      </a>
      <a
        className="border-none hover:underline underline-offset-4 flex"
        target="_blank"
        href="https://github.com/ShayCohenn"
      >
        <Github className="mx-1" />
        Github
      </a>
    </div>
  );
};

export default Footer;
