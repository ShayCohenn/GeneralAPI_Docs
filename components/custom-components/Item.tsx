"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ItemPorps {
  expanded?: boolean;
  active?: boolean;
  isSearch?: boolean;
  onExpand?: () => void;
  onClick?: () => void;
  level?: number;
  label: string;
  icon: LucideIcon;
  hasChildren?: boolean;
}

const Item = ({
  icon: Icon,
  label,
  active,
  hasChildren,
  isSearch,
  onClick,
  onExpand,
  level = 0,
  expanded,
}: ItemPorps) => {
  return (
    <div
      onClick={onClick}
      role="button"
      style={{ paddingLeft: level ? `${level * 12 + 12}px` : "12px" }}
      className={cn(
        `group min-h-[27px] py-2 text-muted-foreground font-medium flex w-9/12
        items-center`,
        active && "bg-primary/10 text-primary"
      )}
    >
      <Icon className="h-[26px] pb-1 w-[18px] mr-1 text-muted-foreground" />
      <span className="truncate mr-4 pb-1">{label}</span>
      {isSearch && (
        <kbd
          className="h-6 select-none flex items-center gap-1 rounded border px-1.5
        font-mono text-[10px] font-medium text-muted-foreground opacity-100"
        >
          <span className="text-xs">ctrl + K</span>
        </kbd>
      )}
      
    </div>
  );
};

export default Item;
