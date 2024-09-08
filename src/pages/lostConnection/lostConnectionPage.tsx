import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import "./lostConnectionPage.css";
import notConnectionImage from "../../images/lostConnectionPageImages/Group 6.svg";

export const LostConnectionPagе: FC = () => {
  const navigate = useNavigate();

  const returnOnLastPage = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <Box
        sx={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img src={notConnectionImage} width={250} height={250} alt="" />
        <p style={{ color: "#3A3A3E", fontSize: 32 }}>
          Упс, похоже, мы потеряли связь
        </p>
        <Button
          onClick={() => returnOnLastPage()}
          sx={{
            bgcolor: "#1D1D93",
            borderRadius: "100px",
            width: "507px",
            height: "56px",
            color: "#fff",
            fontSize: 18,
            textTransform: "none",
            marginTop: "60px",
          }}
        >
          Перезагрузить
        </Button>
      </Box>
    </div>
  );
};

export default LostConnectionPagе;
