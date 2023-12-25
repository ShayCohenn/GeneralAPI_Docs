import { useSearch } from "@/hooks/use-search";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "../ui/command";
import { useEffect, useState } from "react";
import { endpoints } from "@/constants";
import { CommandItem } from "cmdk";
import { useRouter } from "next/navigation";

const SearchCommand = () => {
  const isOpen = useSearch((store) => store.isOpen);
  const onClose = useSearch((store) => store.onClose);
  const toggle = useSearch((store) => store.toggle);
  const router = useRouter();
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

  const onSelect = (id: string) => {
    router.push(`/#${id}`);
    onClose();
  };

  return (
    <div className="z[99]">
      <CommandDialog open={isOpen} onOpenChange={onClose}>
        <CommandInput placeholder="Search the docs" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Results">
            {Object.keys(endpoints).map((key) =>
              endpoints[key].map((item, index) => (
                <CommandItem
                  key={index}
                  value={item.title}
                  title={item.title}
                  onSelect={() => onSelect(item.title)}
                  className="hover:cursor-pointer dark:hover:bg-neutral-800 hover:bg-neutral-200"
                >
                  {item.title}
                </CommandItem>
              ))
            )}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default SearchCommand;
