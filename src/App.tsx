import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ImageList } from "./components/ImageList";

function App() {
  const [favourites, setFavourites] = useState<number>(0);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[url('./assets/background.jpg')] bg-no-repeat bg-cover bg-fixed text-gray-200">
      <Header favourites={favourites} />
      <ImageList setFavourites={setFavourites} />
      <Footer />
    </div>
  );
}

export default App;
