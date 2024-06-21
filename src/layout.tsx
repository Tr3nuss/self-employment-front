import { Box } from "@mui/material";
import { AsidePage } from "./components/asidePage/aside";
import { HeaderPage } from "./components/headerPage/header";
import { Outlet } from "react-router-dom";

export const LayoutPage = () => {
  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>
        <AsidePage />
        <Box>
          <HeaderPage />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
