import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ImageList } from "./components/ImageList";
import { SubscribePage } from "./components/SubscribePage";

function App() {
  const [favourites, setFavourites] = useState<number>(0);
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [subscribePageOpen, setSubscribePageOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[url('./assets/background.jpg')] bg-no-repeat bg-cover bg-fixed text-gray-200">
      <Header favourites={favourites} searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
      <ImageList searchFilter={searchFilter} setFavourites={setFavourites} />
      <Footer setSubscribePageOpen={setSubscribePageOpen} />
      <SubscribePage subscribePageOpen={subscribePageOpen} setSubscribePageOpen={setSubscribePageOpen} />
    </div>
  );
}

export default App;
