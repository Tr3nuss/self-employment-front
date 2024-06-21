import { FC } from "react";
import { Box } from "@mui/material";
import { asideIconsRoutes } from "../../shared/utils/asideIconsData";

export const AsidePage: FC = () => {
  return (
    <>
      <Box
        sx={{
          width: "180px",
          display: "flex",
          justifyContent: "center",
          background: "#3A3A3E",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            padding: "80px 0px",
          }}
        >
          {asideIconsRoutes.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              style={{ width: 70, height: 70 }}
            ></img>
          ))}
        </Box>
      </Box>
    </>
  );
};
