import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 1)
  })
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
