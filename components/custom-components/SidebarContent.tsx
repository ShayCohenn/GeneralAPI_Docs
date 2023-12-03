import { Search } from "lucide-react"
import Item from "./Item"
import { useSearch } from "@/hooks/use-search";
import { endpoints } from "@/constants";
import SearchItem from "./SearchItem";


const SidebarContent = () => {
    const search = useSearch();
  return (
    <div>
        <SearchItem/>
        {Object.keys(endpoints).map((key) => (
          <Item label={key} hasChildren/>
        ))}
    </div>
  )
}

export default SidebarContent