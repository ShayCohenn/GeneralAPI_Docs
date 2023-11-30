import Image from "next/image";

const HeroImage = () => {
  return (
    <div
      className="flex flex-col items-center relative top-0 2xl:h-[500px] xl:h-[400px]
    lg:h-[300px] md:h-[200px] sm:h-[200px] h-[150px]"
    >
      <Image
        fill
        src="logo.svg"
        alt="Logo"
        className="dark:invert object-contain"
      />
    </div>
  );
};

export default HeroImage;
