import favourite from "../assets/favourite.svg";

type ImageCardProps = {
  imgName: string;
  imgLink: string;
};

export const ImageCard = ({ imgName, imgLink }: ImageCardProps) => {
  return (
    <div className="w-48 h-48 flex flex-col relative">
      <h3 className="w-full h-20 absolute px-3 pt-2 pb-10 truncate rounded-2xl bg-gradient-to-b from-slate-950">{imgName}</h3>
      <img
        src={imgLink}
        alt={imgName}
        className="w-full h-full object-cover rounded-2xl"
      />
      <img src={favourite} alt="favourite this photo" className="w-7 object-contain absolute bottom-2 right-2" />
    </div>
  );
};
