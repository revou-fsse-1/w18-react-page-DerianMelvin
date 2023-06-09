import { imageListData } from "../../data/ImageListData";
import { ImageCard } from "./ImageCard";

type ImageListProps = {
  searchFilter: string;
  setFavourites: React.Dispatch<React.SetStateAction<number>>;
};

export const ImageList = ({ searchFilter, setFavourites }: ImageListProps) => {
  return (
    <main className="w-full grow px-10 py-10 mx-auto flex flex-wrap justify-center items-center place-content-start backdrop-blur-md backdrop-brightness-90">
      <div className="max-w-6xl flex flex-wrap gap-4 justify-center items-center">
        {imageListData.map((image) => (
          <ImageCard
            key={image.imgLink}
            imgName={image.imgName}
            imgLink={image.imgLink}
            searchFilter={searchFilter}
            setFavourites={setFavourites}
          />
        ))}
      </div>
    </main>
  );
};
