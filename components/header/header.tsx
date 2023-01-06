import { SearchBar } from "./search-bar";

export function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-center bg-slate-600">
      <SearchBar />
    </header>
  );
}
