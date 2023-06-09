import { useState } from "react";
import { SubscribeForm } from "./SubscribeForm";
import { SubscribeSuccess } from "./SubscribeSuccess";

type SubscribePageProps = {
  subscribePageOpen: boolean;
  setSubscribePageOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SubscribePage = ({
  subscribePageOpen,
  setSubscribePageOpen,
}: SubscribePageProps) => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const closeSubscribePage = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target.id === "pageOverlay") {
      setSubscribePageOpen((prev) => !prev);
    }
  };

  const handleOverlayClassName = () => {
    return subscribePageOpen
      ? "h-full min-w-full flex flex-col justify-center items-center text-black fixed overflow-y-auto backdrop-brightness-75"
      : "hidden";
  };

  return (
    <div
      id="pageOverlay"
      onClick={(e) => closeSubscribePage(e)}
      className={handleOverlayClassName()}
    >
      <div className="w-4/5 max-w-3xl px-8 py-12 flex flex-col rounded-2xl bg-gray-200">
        {!formSubmitted ? (
          <SubscribeForm setFormSubmitted={setFormSubmitted} />
        ) : (
          <SubscribeSuccess />
        )}
      </div>
    </div>
  );
};
