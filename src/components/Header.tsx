import logo from "../assets/logo.svg";
import { FavouritesCounter } from "./FavouritesCounter";
import { SearchBar } from "./SearchBar";

type HeaderProps = {
  favourites: number;
  searchFilter: string;
  setSearchFilter: React.Dispatch<React.SetStateAction<string>>;
};

export const Header = ({
  favourites,
  searchFilter,
  setSearchFilter,
}: HeaderProps) => {
  return (
    <header className="flex flex-col justify-center items-center backdrop-blur-md backdrop-brightness-[0.6]">
      <FavouritesCounter favourites={favourites} />

      <div className="flex flex-col justify-center items-center mb-7 sm:flex-row">
        <img src={logo} alt="logo" className="w-16 object-contain" />
        <h1 className="text-5xl text-center sm:ml-4">Gallery of Earth</h1>
      </div>

      <SearchBar
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
    </header>
  );
};
