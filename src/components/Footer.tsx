type FooterProps = {
  setSubscribePageOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Footer = ({ setSubscribePageOpen }: FooterProps) => {
  return (
    <footer className="px-5 pt-6 flex flex-col justify-center items-center gap-6 text-center backdrop-blur-md backdrop-brightness-50">
      <h2 className="text-2xl">Find out more about the Earth's vast beauty</h2>
      <button
        onClick={() => setSubscribePageOpen((prev) => !prev)}
        className="px-10 py-3 text-xl rounded-lg text-white bg-green-600"
      >
        Subscribe
      </button>
      <span className="mt-5 text-gray-400">© {new Date().getFullYear()}</span>
    </footer>
  );
};
