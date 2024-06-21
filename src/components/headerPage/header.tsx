import { Box, TextField } from "@mui/material";
import alert from "../../images/headerImages/alerts.svg";
import settings from "../../images/headerImages/settings.svg";

export const HeaderPage = () => {
  return (
    <>
      <Box
        sx={{
          width: "1740px",
          maxHeight: "120px",
          background: "#3A3A3E",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            maxWidth: "1560px",
            height: "120px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p></p>
          <TextField sx={{ width: "720px" }} label="Hinted search text" />
          <Box>
            <img src={alert} alt="alert" style={{ height: 70, width: 70 }} />
            <img
              src={settings}
              alt="settings"
              style={{ height: 70, width: 70 }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
