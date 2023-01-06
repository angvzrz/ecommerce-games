import { MagnifyingGlass } from "./magnifying-glass";

export function SearchButton() {
  return (
    <button
      className="absolute inset-y-0 right-1 flex items-center"
      type="submit"
    >
      <MagnifyingGlass />
    </button>
  );
}
