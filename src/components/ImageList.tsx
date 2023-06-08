import { useState } from "react";
import { imageListData } from "../data/ImageListData";
import { ImageCard } from "./ImageCard";

type ImageListData = {
  imgName: string;
  imgLink: string;
}[];

type ImageListProps = {
  setFavourites: React.Dispatch<React.SetStateAction<number>>;
};

export const ImageList = ({ setFavourites }: ImageListProps) => {
  const [image, setImage] = useState<ImageListData>(imageListData);

  return (
    <main className="w-full grow px-10 py-10 mx-auto flex flex-wrap gap-4 justify-center items-center place-content-start backdrop-blur-md backdrop-brightness-90">
      {image.map((img) => (
        <ImageCard
          key={img.imgLink}
          imgName={img.imgName}
          imgLink={img.imgLink}
          setFavourites={setFavourites}
        />
      ))}
    </main>
  );
};
