"use client";

import { cn } from "@/lib/utils";
import { ChevronsLeft } from "lucide-react";

interface SidebarProps {
  isResetting: boolean;
  isMobile: boolean;
  resetWidth: () => void;
  collapse: () => void;
  handleMouseDown: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  sidebarRef: any;
  children: React.ReactNode;
}

const Sidebar = ({
  collapse,
  isMobile,
  handleMouseDown,
  isResetting,
  resetWidth,
  sidebarRef,
  children
}: SidebarProps) => {
 

  return (
    <aside
      ref={sidebarRef}
      className={cn(
        `group/sidebar fixed bg-neutral-950 top-16 h-full border-r-2 border-secondary overflow-y-auto flex w-60 
          flex-col z-[99999] hover:border-r-4`,
        isResetting && "transition-all ease-in-out duration-300",
        isMobile && "w-0"
      )}
    >
      <div
        onClick={collapse}
        role="button"
        className={cn(
          "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
          isMobile && "opacity-100"
        )}
      >
        <ChevronsLeft className="h-6 w-6" />
      </div>
      <div className={`${isResetting && "text-transparent"}`}>
        {children}
      </div>
      <div
        onMouseDown={handleMouseDown}
        onClick={resetWidth}
        className="opacity-0
        transition cursor-ew-resize absolute h-full w-1 bg-primary/20 
        right-0 top-0"
      />
    </aside>
  );
};

export default Sidebar;
