import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useWidgets } from "../context/WidgetContext";
import SearchResultItems from "./SearchResultItems";

type Props = {
  placeholder: string;
};

function SearchBar({ placeholder }: Props) {
  const [query, setQuery] = useState("");
  const searchBarRef = useRef<HTMLFormElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {};

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchBarRef]);

  return (
    <div className="flex justify-end grow-[3]">
      <form className="relative" ref={searchBarRef}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder || "Search..."}
          className={`w-28 rounded-md bg-[#F0F5FA] pl-10 py-1 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-blue-400  sm:w-[30rem] sm:focus:w-[32rem] ring-blue-200 ring-1 text-gray-600 focus:bg-white ${
            query && "focus:rounded-b-none"
          }`}
        />
        <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
          <Search className="h-4 text-gray-400" />
        </span>
        <SearchResultItems query={query.toLowerCase()} />
      </form>
    </div>
  );
}

export default SearchBar;
