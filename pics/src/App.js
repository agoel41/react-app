import { useState } from 'react';
import SearchBar from "./components/SearchBar";
import ImageList from './components/ImageList';
import searchImages from "./api";

function App() {

  // define a state of images
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    // update image state
    setImages(result);

    console.log(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {/* In images = {images}, the first images is prop and the second one is state. */} 
      <ImageList images={images} />
    </div>
  );
}

export default App;
