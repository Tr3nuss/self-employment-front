import { Box } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";

export const PaymentPage: FC = () => {
  return (
    <>
      <Box sx={{ maxWidth: "1740px" }}>
        <Box sx={{ maxWidth: "1460px", margin: "20px auto" }}>
          <p>Главная / Платежи</p>

          <Box sx={{ display: "flex", gap: "100px" }}>
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
        </Box>
      </Box>
    </>
  );
};
