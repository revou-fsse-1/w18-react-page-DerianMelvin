export const SubscribeSuccess = () => {
  const displaySuccessSVG = () => (
    <svg width="88" height="88" viewBox="0 0 48 48" className="fill-green-500">
      <path d="M42.6667 0H5.33333C3.91885 0 2.56229 0.561903 1.5621 1.5621C0.561903 2.56229 0 3.91885 0 5.33333V42.6667C0 44.0812 0.561903 45.4377 1.5621 46.4379C2.56229 47.4381 3.91885 48 5.33333 48H42.6667C44.0812 48 45.4377 47.4381 46.4379 46.4379C47.4381 45.4377 48 44.0812 48 42.6667V5.33333C48 3.91885 47.4381 2.56229 46.4379 1.5621C45.4377 0.561903 44.0812 0 42.6667 0ZM18.6667 37.3333L5.33333 24L9.09333 20.24L18.6667 29.7867L38.9067 9.54667L42.6667 13.3333L18.6667 37.3333Z" />
    </svg>
  );

  return (
    <div className="w-full flex flex-col gap-6 items-center text-center">
      {displaySuccessSVG()}
      <h2 className="text-3xl font-bold">🥳 Thanks for subscribing! 🎉</h2>
      <p className="text-lg">
        You'll be receiving notification when we send stuff your mailbox weekly, so stay tuned!
      </p>
    </div>
  );
};
