import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FC } from "react";
import { AddDealPage } from "./dealOptions/addDeal";

export const DealPage: FC = () => {
  return (
    <>
      <Box sx={{ maxWidth: "1740px" }}>
        <Box sx={{ maxWidth: "1460px", margin: "20px auto" }}>
          <p>Главная / Сделки</p>

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
          
        </Box>
      </Box>
    </>
  );
};
