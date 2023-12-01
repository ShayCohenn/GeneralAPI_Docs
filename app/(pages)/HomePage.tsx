import { Button } from "@/components/ui/button";
import HeroImage from "../../components/custom-components/homePage/HeroImage";
import { ChevronDown, Rocket } from "lucide-react";

const HomePage = () => {
  return (
    <div className="h-screen mr-10" id="home">
      <HeroImage />
      <div className="flex-col items-center justify-center">
        <p
          className="text-center xl:mt-24 xl:text-3xl lg:text-2xl md:text-xl 
          text-sm text-neutral-950 dark:text-neutral-200"
        >
          Welcome to GeneralAPI&apos;s documentation site.
          <br />
          GeneralAPI is an all purpose API built by the FastAPI framework.{" "}
          <br />
          GeneralAPI is very easy to use, just make a request to an endpoint of
          your choosing and get JSON in response.
          <br />
          In GeneralAPI you can get anything for your next project,
          <br /> from financial data, generating QR codes, weather data,
          upcoming sports matches,
          <br />
          and even random dad jokes, facts and riddles
        </p>
        <div className="mt-24 flex flex-col lg:gap-y-24 gap-y-12 items-center justify-center">
          <a href="#docs">
            <Button
              className="bg-sky-700 md:h-20 md:w-44 md:text-xl h-16 w-36 
              text-base text-neutral-200 hover:bg-sky-600"
            >
              <Rocket className="h-5 w-5 text-neutral-200 m-1" />
              Get started
            </Button>
          </a>
          <a href="#docs">
            <ChevronDown
              className="animate-bounce h-8 w-8 md:h-12 md:w-12 
            text-muted-foreground"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
