"use client";

import { endpoints, iconMapping } from "@/constants";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ItemPorps {
  label: string;
  hasChildren?: boolean;
}

const Item = ({
  label,
  hasChildren,
}: ItemPorps) => {
  const [expanded, setExpanded] = useState(false);
  const ChevronIcon = expanded ? ChevronDown : ChevronRight;

  return (
    <div
      role="button"
      className={cn(
        `py-2 dark:text-neutral-300 text-neutral-600 font-medium 
        hover:text-neutral-950 dark:hover:text-neutral-50`,
        hasChildren ? "pl-2" : "pl-8",
      )}
    >
      {/* If an item has children - render them if not render the title */}
      {hasChildren ? (
        <div 
        onClick={() => setExpanded(!expanded)}
        className="flex items-center"
        >
          <ChevronIcon className="h-6 w-6" />
          <span>{label}</span>
          {Object.keys(endpoints).map((key) => {
            const Icon = key === label && iconMapping[key];
            if(Icon) return <Icon key={key} className="h-5 w-5 ml-2"/>
            else return null
          })}
        </div>
      ) : (
        <a href={`#${label}`} className="truncate">• {label}</a>
      )}
      {/* Display the children elements */}
      <div>
        {expanded &&
          endpoints[label].map((item, index) => <Item label={item.title} key={index} />)}
      </div>
    </div>
  );
};

export default Item;
