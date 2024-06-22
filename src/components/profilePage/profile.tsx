import { Box, Button, TextField } from "@mui/material";
import { FC } from "react";
import telegramm from "../../images/profileImages/telegram.svg";

export const ProfilePage: FC = () => {
  return (
    <>
      <Box sx={{ maxWidth: "1740px" }}>
        <Box sx={{ maxWidth: "1460px", margin: "40px auto" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: 32, fontWeight: 400 }}>Профиль</p>
            <Button
              sx={{
                display: "flex",
                gap: "10px",
                textTransform: "none",
                boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2);",
                bgcolor: "#fefeff",
              }}
            >
              <img src={telegramm} alt="" />
              <p>Получать уведомления в telegramm</p>
            </Button>
          </Box>

          <p
            style={{
              textAlign: "center",
              fontSize: "32px",
              fontWeight: "400",
            }}
          >
            Заполните ваши данные
          </p>

          <Box
            sx={{
              margin: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "50px",
            }}
          >
            <Box sx={{ display: "flex", gap: "20px" }}>
              <TextField
                label="Фамилия"
                variant="standard"
                sx={{ width: 375 }}
              ></TextField>
              <TextField
                label="Имя"
                variant="standard"
                sx={{ width: 375 }}
              ></TextField>
              <TextField
                label="Отчество"
                variant="standard"
                sx={{ width: 375 }}
              ></TextField>
            </Box>

            <Box sx={{ display: "flex", gap: "20px" }}>
              <TextField
                label="Логин"
                variant="standard"
                sx={{ width: 375 }}
              ></TextField>
              <TextField
                label="E-mail"
                variant="standard"
                sx={{ width: 375 }}
              ></TextField>
              <TextField
                label="Телефон"
                variant="standard"
                sx={{ width: 375 }}
              ></TextField>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
