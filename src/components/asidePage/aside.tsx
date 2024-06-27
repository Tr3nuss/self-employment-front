import { FC } from "react";
import { Box } from "@mui/material";
import { asideIconsRoutes } from "../../shared/utils/asideIconsData";
import { useNavigate } from "react-router-dom";

export const AsidePage: FC = () => {
  const navigate = useNavigate();

  const goOnOtherPage = (history: string) => {
    navigate(history);
  };

  return (
    <>
      <Box
        sx={{
          minWidth: "180px",
          display: "flex",
          justifyContent: "center",
          background: "#3A3A3E",
          minHeight: "100vh",
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
              onClick={() => goOnOtherPage(item.history)}
            ></img>
          ))}
        </Box>
      </Box>
    </>
  );
};
