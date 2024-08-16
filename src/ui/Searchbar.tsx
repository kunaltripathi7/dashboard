import { Search } from "lucide-react";
import { useState } from "react";

type Props = {
  placeholder: string;
};

function SearchBar({ placeholder }: Props) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {};

  return (
    <div className="flex justify-end grow-[3]">
      <form className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder || "Search..."}
          className="w-28 rounded-md bg-blue-50 pl-10 py-1 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-blue-400  sm:w-[30rem] sm:focus:w-[32rem] ring-blue-200 ring-1 text-gray-600"
        />
        <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
          <Search className="h-4 text-gray-400" />
        </span>
      </form>
    </div>
  );
}

export default SearchBar;
