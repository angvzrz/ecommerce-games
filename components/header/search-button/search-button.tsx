import { MagnifyingGlass } from "./magnifying-glass";

interface ISearchButtonProps {
  onClick: () => void;
}

export function SearchButton({ onClick }: ISearchButtonProps) {
  return (
    <button
      className="absolute inset-y-0 right-1 flex items-center"
      type="submit"
      onClick={onClick}
    >
      <MagnifyingGlass />
    </button>
  );
}
