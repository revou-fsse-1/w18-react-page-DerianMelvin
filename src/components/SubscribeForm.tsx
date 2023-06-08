type SubscribeFormProps = {
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SubscribeForm = ({ setFormSubmitted }: SubscribeFormProps) => {
  const handleSubscribeEvent = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setFormSubmitted((prev) => !prev);
  };

  return (
    <form className="w-full flex flex-col gap-6 items-center">
      <div className="w-11/12 flex flex-col gap-2 text-center pb-7 border-b-[1px] border-gray-400">
        <h2 className="text-3xl font-bold">Discoveries within your mailbox</h2>
        <p className="text-lg">
          and more to come every week when joining our newsletter!
        </p>
      </div>

      <div className="w-4/5 flex flex-col gap-1">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="John Doe"
          className="px-4 py-2 border-transparent rounded-xl text-black placeholder-slate-500 focus:outline-none"
        />
        <span className="text-sm text-red-600">Invalid username</span>
      </div>

      <div className="w-4/5 flex flex-col gap-1">
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="myemail@gmail.com"
          className="px-4 py-2 border-transparent rounded-xl text-black placeholder-slate-500 focus:outline-none"
        />
        <span className="text-sm text-red-600">Invalid email</span>
      </div>

      <button
        type="submit"
        onClick={(e) => handleSubscribeEvent(e)}
        className="px-10 py-3 mt-4 text-xl rounded-lg text-white bg-green-600"
      >
        Subscribe
      </button>
    </form>
  );
};
