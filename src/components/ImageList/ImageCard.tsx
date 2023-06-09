import { useState } from "react";

type ImageCardProps = {
  imgName: string;
  imgLink: string;
  searchFilter: string;
  setFavourites: React.Dispatch<React.SetStateAction<number>>;
};

export const ImageCard = ({
  imgName,
  imgLink,
  searchFilter,
  setFavourites,
}: ImageCardProps) => {
  const [toggleFavourite, setToggleFavourite] = useState<boolean>(false);

  const handleFavouriteIcon = () => {
    const toggleClassName = toggleFavourite
      ? "absolute bottom-2 right-2 cursor-pointer fill-rose-600 transition-all scale-125"
      : "absolute bottom-2 right-2 cursor-pointer fill-white transition-all";

    return (
      <svg
        width="30"
        height="25"
        viewBox="0 0 33 31"
        onClick={toggleFavouriteImage}
        className={toggleClassName}
      >
        <path d="M16.5 30.6938L14.1438 28.5488C5.775 20.96 0.25 15.9388 0.25 9.8125C0.25 4.79125 4.1825 0.875 9.1875 0.875C12.015 0.875 14.7288 2.19125 16.5 4.255C18.2712 2.19125 20.985 0.875 23.8125 0.875C28.8175 0.875 32.75 4.79125 32.75 9.8125C32.75 15.9388 27.225 20.96 18.8562 28.5488L16.5 30.6938Z" />
      </svg>
    );
  };

  const handleClassNameBySearchFilter = () => {
    return imgName.toLowerCase().includes(searchFilter.toLowerCase())
      ? "w-48 h-48 flex flex-col relative transition-all duration-300 hover:cursor-pointer hover:scale-110 xl:w-56 xl:h-56 xl:hover:w-72 hover:z-50 hover:shadow-2xl"
      : "hidden";
  };

  const toggleFavouriteImage = () => {
    if (!toggleFavourite) {
      setToggleFavourite((prev) => !prev);
      setFavourites((prev) => prev + 1);
    } else {
      setToggleFavourite((prev) => !prev);
      setFavourites((prev) => prev - 1);
    }
  };

  return (
    <div className={handleClassNameBySearchFilter()}>
      <h3
        onClick={toggleFavouriteImage}
        className="w-full h-20 absolute px-3 pt-2 pb-10 truncate rounded-2xl bg-gradient-to-b from-slate-950"
      >
        {imgName}
      </h3>
      <img
        src={imgLink}
        alt={imgName}
        className="w-full h-full object-cover rounded-2xl"
        onClick={toggleFavouriteImage}
      />
      {handleFavouriteIcon()}
    </div>
  );
};
