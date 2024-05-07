import { Route, Routes } from "react-router-dom";

import ThumbnailContainer from "../components";

function AppRouter() {
  return;
  <>
    <Routes>
      <Route path="/imageGallery" element={<ThumbnailContainer />} />
    </Routes>
  </>;
}

export default AppRouter;
