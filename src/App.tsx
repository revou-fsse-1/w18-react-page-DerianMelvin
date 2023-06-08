import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ImageList } from "./components/ImageList";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[url('./assets/background.jpg')] bg-no-repeat bg-cover bg-fixed text-gray-200">
      <Header />
      <ImageList />
      <Footer />
    </div>
  );
}

export default App;
