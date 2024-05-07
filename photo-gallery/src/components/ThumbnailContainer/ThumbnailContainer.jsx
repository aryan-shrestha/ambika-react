import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import "./ThumbnailContainer.css";

import images from "../../assets/images";

const ThumbnailContainer = ({ setIsImageViewerOn, setActiveImage }) => {
  return (
    <div className="thumbnail-container">
      {images.map((image, index) => {
        return (
          <Thumbnail
            src={image}
            key={index}
            setIsImageViewerOn={setIsImageViewerOn}
            setActiveImage={setActiveImage}
          />
        );
      })}
    </div>
  );
};

export default ThumbnailContainer;
