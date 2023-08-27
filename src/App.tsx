import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/Routes";
import { useEffect } from "react";
import AuthProvider from "./auth/AuthContext";
import { CssBaseline } from "@mui/material";

function App() {

  useEffect(() => {
    window.scrollTo(0, 1)
  })

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
