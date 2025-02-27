import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
function BaseLayout() {
  return (
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default BaseLayout;
