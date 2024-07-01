import { Box, TextField } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";

export const AddDealPage: FC = () => {
  return (
    <>
      <Box>
        <Box>
          <Box sx={{ maxWidth: "1740px" }}>
            <Box sx={{ maxWidth: "1460px", margin: "20px auto" }}>
              <p>Главная / Сделки / Добавить сделку</p>

              <Box sx={{ display: "flex", gap: "100px", marginTop: "25px" }}>
                <NavLink
                  to="/layout/customers"
                  style={({ isActive }) => ({
                    textDecoration: isActive ? "underline  blue" : "none",
                    textUnderlineOffset: isActive ? "7px" : "0px",
                    fontSize: 32,
                    fontWeight: 400,
                    color: "#000",
                  })}
                >
                  Заказчики
                </NavLink>
                <NavLink
                  to="/layout/transactions"
                  style={({ isActive }) => ({
                    textDecoration: isActive ? "underline blue" : "none",
                    textUnderlineOffset: isActive ? "7px" : "0px",
                    fontSize: 32,
                    fontWeight: 400,
                    color: "#000",
                  })}
                >
                  Сделки
                </NavLink>
              </Box>
              <p style={{ fontSize: 32, fontWeight: 400, marginTop: 40 }}>
                Добавить сделку
              </p>

              <Box sx={{ display: "flex", gap: "20px", marginTop: "40px" }}>
                <TextField
                  sx={{ width: 506 }}
                  label="Договор"
                  variant="standard"
                />
                <TextField
                  sx={{ width: 243 }}
                  label="Номер договора"
                  variant="standard"
                />
                <TextField
                  sx={{ width: 243 }}
                  label="Приложение к договору"
                  variant="standard"
                />
                <TextField sx={{ width: 243 }} label="Акт" variant="standard" />
              </Box>

              <Box sx={{ display: "flex", gap: "20px", marginTop: "40px" }}>
                <TextField
                  sx={{ width: 506 }}
                  label="Заказчик"
                  variant="standard"
                />
                <TextField
                  sx={{ width: 243 }}
                  label="Субъект"
                  variant="standard"
                />
              </Box>

              <Box sx={{ display: "flex", gap: "20px", marginTop: "40px" }}>
                <TextField
                  sx={{ width: 506 }}
                  label="Предоставленная услуга"
                  variant="standard"
                />
                <TextField sx={{ width: 243 }} label="Сумма сделки" />
                <TextField sx={{ width: 243 }} label="Дата" type="date" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
