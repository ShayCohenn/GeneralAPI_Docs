import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface textProps {
  text: string;
  main?: boolean;
}

const CopyCodeBox = ({ text, main }: textProps) => {
  const [lastCopiedItem, setLastCopiedItem] = useState<string | null>(null);

  const onCopy = (text: string, item: string) => {
    navigator.clipboard.writeText(text);

    setLastCopiedItem(item);
    setTimeout(() => {
      setLastCopiedItem(null);
    }, 1000);
  };
  return (
    <div
      className={cn(
        `dark:bg-gray-800 bg-gray-300 relative
            rounded-sm py-2 text-sm px-2 max-w-[400px]`,
        main && "mx-auto mt-12"
      )}
    >
      <code>{text}</code>
      <button
        onClick={() => onCopy(text, "endpoint")}
        disabled={lastCopiedItem === "endpoint"}
        className="absolute bottom-0 right-0 px-2 h-full 
              dark:bg-gray-800 bg-gray-300"
      >
        {lastCopiedItem === "endpoint" ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
};

export default CopyCodeBox;
