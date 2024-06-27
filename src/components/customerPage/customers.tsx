import { NavLink } from "react-router-dom";
import { Box, Autocomplete, TextField } from "@mui/material";
import { FC } from "react";

export const CustomersPage: FC = () => {
  const subjects = [
    { label: "Физическое лицо" },
    { label: "ИП" },
    { label: "ООО" },
  ];

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

          <p style={{ marginTop: "40px", fontSize: "32px" }}>
            Добавить заказчика
          </p>

          <Autocomplete
            disablePortal
            options={subjects}
            sx={{ width: 300, marginTop: "40px" }}
            renderInput={(params) => (
              <TextField {...params} label="Субъекты" variant="standard" />
            )}
          />
        </Box>
      </Box>
    </>
  );
};
