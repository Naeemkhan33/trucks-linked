import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { LayoutInSide } from "./layouts/LayoutInSide";

function App() {
  return (
    <>
      <BrowserRouter>
        <LayoutInSide />
      </BrowserRouter>
    </>
  );
}

export default App;
