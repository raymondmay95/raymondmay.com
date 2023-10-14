import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/Routes";
import { useEffect } from "react";
import AuthProvider from "./auth/AuthContext";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";

function App() {

  useEffect(() => {
    window.scrollTo(0, 1)
  })

  return (
    <>
      <CssBaseline />
      <HelmetProvider>
        <BrowserRouter>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
