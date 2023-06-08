import { useState } from "react";
import { imageListData } from "../data/ImageListData";
import { ImageCard } from "./ImageCard";

export const ImageList = () => {
  const [image, setImage] = useState(imageListData);

  return (
    <main className="w-4/5 mx-auto flex flex-wrap gap-4 justify-center items-center">
      {image.map((img) => (
        <ImageCard imgName={img.imgName} imgLink={img.imgLink} />
      ))}
    </main>
  );
};
