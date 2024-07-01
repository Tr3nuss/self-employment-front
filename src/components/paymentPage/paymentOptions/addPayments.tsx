import { Box, TextField } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";

export const AddPayments: FC = () => {
  return (
    <>
      <Box sx={{ maxWidth: "1740px" }}>
        <Box sx={{ maxWidth: "1460px", margin: "20px auto" }}>
          <p>Главная / Платежи / Новый платеж</p>

          <Box sx={{ display: "flex", gap: "100px", marginTop: "40px" }}>
            <NavLink
              to="/layout/payments"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline blue" : "none",
                textUnderlineOffset: isActive ? "7px" : "0px",
                fontSize: 32,
                fontWeight: 400,
                color: "#000",
              })}
            >
              Платежи
            </NavLink>
            <NavLink
              to="*"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline blue" : "none",
                textUnderlineOffset: isActive ? "7px" : "0px",
                fontSize: 32,
                fontWeight: 400,
                color: "#000",
              })}
            >
              Статистика
            </NavLink>
          </Box>

          <p style={{ fontSize: 32, fontWeight: 400, marginTop: "40px" }}>
            Новый платеж
          </p>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            <TextField
              sx={{ width: 506 }}
              label="Заказчик"
              variant="standard"
            />
            <TextField sx={{ width: 243 }} label="Субъект" />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "64px",
            }}
          >
            <TextField
              sx={{ width: 243 }}
              label="Договор №"
              variant="standard"
            />
            <TextField
              sx={{ width: 243 }}
              label="Приложение к договору"
              variant="standard"
            />
            <TextField sx={{ width: 243 }} label="Акт" variant="standard" />
            <TextField sx={{ width: 243 }} label="Счет" />
            <TextField sx={{ width: 243 }} label="Чек" />
          </Box>
        </Box>
      </Box>
    </>
  );
};
