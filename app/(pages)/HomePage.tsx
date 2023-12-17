import { Button } from "@/components/ui/button";
import HeroImage from "../../components/custom-components/homePage/HeroImage";
import { Check, ChevronDown, Copy, Rocket } from "lucide-react";
import { useState } from "react";
import { BASE_URL } from "@/constants";

const HomePage = () => {
  const [lastCopiedItem, setLastCopiedItem] = useState<string | null>(null);

  const onCopy = (text: string, item: string) => {
    navigator.clipboard.writeText(text);

    setLastCopiedItem(item);
    setTimeout(() => {
      setLastCopiedItem(null);
    }, 1000);
  };
  return (
    <div className="h-screen mx-auto" id="home">
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
        <div
          className="dark:bg-gray-800 relative bg-gray-300 flex py-1
            px-2 rounded-sm items-center w-10/12 mx-auto mt-2 h-12 justify-between"
        >
          <code>{BASE_URL}</code>
          <button
            onClick={() => onCopy(BASE_URL, "endpointExample")}
            disabled={lastCopiedItem === "endpointExample"}
            className="relative top-0 right-0 h-full pl-5 rounded-r-sm"
          >
            {lastCopiedItem === "endpointExample" ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
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
