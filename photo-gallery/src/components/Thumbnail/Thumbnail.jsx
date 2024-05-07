import React from "react";

import "./Thumbnail.css";

const Thumbnail = ({ src, setIsImageViewerOn, setActiveImage }) => {
  const toggleImageViewer = (e) => {
    setIsImageViewerOn(true);
    setActiveImage(e.target.src);
  };

  return (
    <div className="thumbnail">
      <img
        src={src}
        alt="thumbnail"
        onClick={(e) => {
          toggleImageViewer(e);
        }}
      />
    </div>
  );
};

export default Thumbnail;
