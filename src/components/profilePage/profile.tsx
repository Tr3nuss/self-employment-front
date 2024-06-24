import { Box, Button, TextField } from "@mui/material";
import { FC } from "react";
import telegramm from "../../images/profileImages/telegram.svg";
import { useDispatch, useSelector } from "react-redux";
import { setState } from "../../store/profileDataSlice/profileData";
import { RootState } from "../../store/store";
import { ProfileData } from "./profileData";

export const ProfilePage: FC = () => {
  const passportDataProps = {
    variant: "standard",
    sx: { width: "375px" },
  };

  const dispatch = useDispatch();
  const profileData = useSelector(
    (state: RootState) => state.profileData.boolState
  );

  const setBool = () => {
    dispatch(setState());
  };

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
              margin: "60px 0px",
              display: "flex",
              flexDirection: "column",
              gap: "50px",
            }}
          >
            <Box sx={{ display: "flex", gap: "20px" }}>
              <TextField label="Фамилия" {...passportDataProps}></TextField>
              <TextField label="Имя" {...passportDataProps}></TextField>
              <TextField label="Отчество" {...passportDataProps}></TextField>
            </Box>

            <Box sx={{ display: "flex", gap: "20px" }}>
              <TextField label="Логин" {...passportDataProps}></TextField>
              <TextField label="E-mail" {...passportDataProps}></TextField>
              <TextField label="Телефон" {...passportDataProps}></TextField>
            </Box>
          </Box>
          <p style={{ fontSize: 24 }} onClick={setBool}>
            Для ведения бухгалтерии в сервисе заполните следующие данные
          </p>

          <Box>{profileData && <ProfileData />}</Box>
        </Box>
      </Box>
    </>
  );
};
