import { getGames } from "pages/api/igdb-api";
import { ChangeEvent, useEffect, useState } from "react";
import { SearchButton } from "../search-button";

export function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async () => {
    const foundGames = await getGames(searchValue);
    console.log(foundGames);
    
  };

  return (
    <label className="relative">
      <input
        className="m-0 w-full rounded-sm border-2 pl-2 duration-300 ease-in hover:border-purple-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
        placeholder="Search.."
        type="search"
        name="search"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <SearchButton onClick={handleSearch}/>
    </label>
  );
}
