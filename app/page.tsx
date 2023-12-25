"use client";

import { ElementRef, useEffect, useRef, useState } from "react";
import Navbar from "../components/custom-components/Navbar";
import Sidebar from "../components/custom-components/Sidebar";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import SearchCommand from "@/components/custom-components/SearchCommand";
import SidebarContent from "@/components/custom-components/SidebarContent";
import HomePage from "@/app/(pages)/HomePage";
import Docs from "./(pages)/Docs";
import About from "./(pages)/About";
import Footer from "@/components/custom-components/Footer";
import { endpoints } from "@/constants";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const mainRef = useRef<ElementRef<"main">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    isMobile ? collapse() : resetWidth();
  }, [isMobile]);

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    let newWidth = event.clientX;

    newWidth < 240 && (newWidth = 240);
    newWidth > 480 && (newWidth = 480);

    if (sidebarRef.current && mainRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      mainRef.current.style.setProperty("left", `${newWidth}px`);
      mainRef.current.style.setProperty("width", `calc(100% - ${newWidth}px)`);
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const resetWidth = () => {
    if (sidebarRef.current && mainRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      mainRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );
      mainRef.current.style.setProperty("left", isMobile ? "0" : "240px");
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (sidebarRef.current && mainRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      mainRef.current.style.setProperty("width", "100%");
      mainRef.current.style.setProperty("left", "0");
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  return (
    <div>
      <div>
        <Navbar />
        <Sidebar
          collapse={collapse}
          handleMouseDown={handleMouseDown}
          isMobile={isMobile}
          isResetting={isResetting}
          resetWidth={resetWidth}
          sidebarRef={sidebarRef}
        >
          <SidebarContent/>
        </Sidebar>
        {isCollapsed && !isResetting && (
          <MenuIcon
            role="button"
            onClick={resetWidth}
            className="h-6 w-6 text-muted-foreground mt-2 ml-2 z-[99999] fixed top-16"
          />
        )}
      </div>
      <main
        ref={mainRef}
        className={cn(
          `absolute top-16 w-[calc(900%-240px)] pb-20`,
          isResetting && "transition-all ease-in-out duration-300",
          isCollapsed && "pl-12"
        )}
      >
        <SearchCommand />
        <HomePage />
        <Docs />
        <About />
        <Footer/>
      </main>
    </div>
  );
}
