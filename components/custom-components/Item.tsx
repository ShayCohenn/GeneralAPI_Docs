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
  hasChildren
}: ItemPorps) => {
  const [expanded, setExpanded] = useState(false);
  const ChevronIcon = expanded ? ChevronDown : ChevronRight;

  return (
    <div
      role="button"
      className={cn(
        `py-2 text-muted-foreground font-medium
        `,
        hasChildren ? "pl-2" : "pl-8"
      )}
    >
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
        <a href={`#${label}`}>• {label}</a>
      )}
      <div className="">
        {expanded &&
          endpoints[label].map((item, index) => <Item label={item.title} key={index}/>)}
      </div>
    </div>
  );
};

export default Item;
