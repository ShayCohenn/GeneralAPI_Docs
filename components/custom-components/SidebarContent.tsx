import { Search } from "lucide-react"
import Item from "./Item"
import { useSearch } from "@/hooks/use-search";


const SidebarContent = () => {
    const search = useSearch();
  return (
    <div>
        <Item label="Search" icon={Search} isSearch onClick={search.onOpen}/>
    </div>
  )
}

export default SidebarContent