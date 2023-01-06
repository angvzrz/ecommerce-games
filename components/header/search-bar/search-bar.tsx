import { SearchButton } from "../search-button";

export function SearchBar() {
  return (
    <label className="relative">
      <input
        className="m-0 w-full rounded-sm border-2 pl-2 duration-300 ease-in hover:border-purple-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
        placeholder="Search.."
        type="search"
        name="search"
      />
      <SearchButton />
    </label>
  );
}
