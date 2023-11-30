import { useSearch } from "@/hooks/use-search";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "../ui/command";
import { useEffect, useState } from "react";

const SearchCommand = () => {
  const isOpen = useSearch((store) => store.isOpen);
  const onClose = useSearch((store) => store.onClose);
  const toggle = useSearch((store) => store.toggle);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="z[99]">
      <CommandDialog open={isOpen} onOpenChange={onClose}>
        <CommandInput placeholder="Search the docs" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Results"></CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default SearchCommand;
