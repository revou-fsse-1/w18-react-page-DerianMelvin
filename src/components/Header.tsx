import logo from "../assets/logo.svg";
import favourite from "../assets/favourite.svg";

export const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center">
      <div className="flex self-end px-3 py-2 bg-black bg-opacity-40 rounded-bl-2xl">
        <img
          src={favourite}
          alt="total favourites"
          className="w-8 object-contain"
        />
        <p className="ml-1 text-xl">12</p>
      </div>

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
