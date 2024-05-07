import React from "react";
import "./ImageViewer.css";

const ImageViewer = ({ activeImage, setIsImageViewerOn }) => {
  return (
    <div className="image-viewer">
      <button
        onClick={() => {
          setIsImageViewerOn(false);
        }}
      >
        X
      </button>
      <img src={activeImage} alt="" />
    </div>
  );
};

export default ImageViewer;
