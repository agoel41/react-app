import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

function ImageList( {images}) {

  const renderedImages = images.map((image) => {
    {/* there are two props - key, image */}
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className='image-list'> {renderedImages} </div>;
}

export default ImageList;
