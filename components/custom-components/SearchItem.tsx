import { useSearch } from "@/hooks/use-search";
import { Search } from "lucide-react";

const SearchItem = () => {
  const search = useSearch();
  return (
    <>
      <div
        onClick={search.onOpen}
        className="hover:cursor-pointer pl-2 py-2 text-muted-foreground font-medium flex w-9/12
    items-center"
      >
        <Search className="h-[26px] pb-1 w-[18px] mr-1 text-muted-foreground" />
        <span className="truncate mr-4 pb-1">Search</span>
        <kbd
          className="h-6 select-none flex items-center gap-1 rounded border px-1.5
        font-mono text-[10px] font-medium text-muted-foreground opacity-100"
        >
          <span className="text-xs">ctrl + K</span>
        </kbd>
      </div>
      <div className="border-b border-neutral-200 dark:border-neutral-800 w-11/12 mx-auto" />
    </>
  );
};

export default SearchItem;
