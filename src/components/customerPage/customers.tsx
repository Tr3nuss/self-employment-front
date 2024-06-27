import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";

export const CustomersPage = () => {
  return (
    <>
      <Box sx={{ maxWidth: "1740px" }}>
        <Box sx={{ maxWidth: "1460px", margin: "20px auto" }}>
          <p>Главная / Заказчики</p>

          <Box>
            <NavLink
              to="*"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline dotted blue" : "none",
              })}
            >
              TAB
            </NavLink>
            <NavLink
              to="*"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline dotted blue" : "none",
              })}
            >
              TAB
            </NavLink>
            <NavLink
              to="*"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline dotted blue" : "none",
              })}
            >
              TAB
            </NavLink>
            <NavLink
              to="*"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline dotted blue" : "none",
              })}
            >
              TAB
            </NavLink>
            <NavLink
              to="*"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline dotted blue" : "none",
              })}
            >
              TAB
            </NavLink>
          </Box>
        </Box>
      </Box>
    </>
  );
};
