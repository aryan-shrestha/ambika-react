import { useState } from "react";
import "./App.css";

import { ImageViewer, Navbar, ThumbnailContainer } from "./components";
import StateExample from "./components/StateExample/StateExample";

function App() {
  const [isImageViewerOn, setIsImageViewerOn] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  return (
    <>
      <Navbar />
      {/* <ThumbnailContainer
        setIsImageViewerOn={setIsImageViewerOn}
        setActiveImage={setActiveImage}
      />
      {isImageViewerOn ? (
        <ImageViewer
          activeImage={activeImage}
          setIsImageViewerOn={setIsImageViewerOn}
        />
      ) : (
        ""
      )} */}
      <StateExample />
    </>
  );
}

export default App;
