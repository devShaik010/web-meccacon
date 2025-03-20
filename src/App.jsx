import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import { useState, useEffect } from "react";
import Loader from "@components/Loader/Loader";
import Floating from "@components/Floating/Floating";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        {loading && <Loader />}
        <AppRoutes />
        <Floating />
      </div>
    </BrowserRouter>
  );
}

export default App;
