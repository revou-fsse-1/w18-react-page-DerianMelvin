import logo from "../assets/logo.svg";
import { FavouritesCounter } from "./FavouritesCounter";

type HeaderProps = {
  favourites: number;
};

export const Header = ({ favourites }: HeaderProps) => {
  return (
    <header className="flex flex-col justify-center items-center backdrop-blur-md backdrop-brightness-[0.6]">
      <FavouritesCounter favourites={favourites} />

      <div className="flex flex-col justify-center items-center mb-7 sm:flex-row">
        <img src={logo} alt="logo" className="w-16 object-contain" />
        <h1 className="text-5xl text-center sm:ml-4">Gallery of Earth</h1>
      </div>

      <div className="w-full flex items-center justify-center">
        <label htmlFor="searchBar" className="sr-only">
          searchBar
        </label>
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Search for..."
          className="w-4/5 px-4 py-2 mb-7 border-transparent rounded-xl text-black placeholder-slate-500"
        />
      </div>
    </header>
  );
};
