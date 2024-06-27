import { FC } from "react";
import "./recpass.css";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const RecPasswordPage: FC = () => {
  const sendIntervalMessageSeconds: number = 120;
  const sendIntervalToMailMessage: string = `${
    (sendIntervalMessageSeconds / 60) % 60
  }:00`;

  const navigate = useNavigate();
  const returnOnAuth = () => navigate(-1);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <form className="recpass-input-form">
          <h2 className="recpass-title">Забыли пароль?</h2>
          <TextField
            label="E-mail"
            variant="standard"
            sx={{ width: "500px" }}
          ></TextField>
          <Button
            sx={{
              width: "500px",
              textTransform: "none",
              bgcolor: "#1047A9",
              color: "white",
              fontSize: "24px",
              fontWeight: "400",
              borderRadius: "30px",
              "&:hover": { background: "#1047A9" },
            }}
          >
            Восстановить пароль
          </Button>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              gap: "30px",
            }}
          >
            <p className="send-message-notification">
              Мы вышлем вам сообщение на указанную почту
            </p>
            <p className="send-second-request">
              Повторный запрос можно будет отправить через
              {" " + sendIntervalToMailMessage} мин
            </p>
          </Box>

          <p onClick={returnOnAuth} className="return-on-auth">
            Назад
          </p>
        </form>
      </Box>
    </>
  );
};
