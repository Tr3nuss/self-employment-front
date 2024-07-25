import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FC } from "react";

export const DocumentOptionNavPage: FC = () => {
  return (
    <Box sx={{ maxWidth: "1420px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NavLink
          to="/layout/document/create_document"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline blue" : "none",
            textUnderlineOffset: isActive ? "7px" : "0px",
            fontSize: 32,
            fontWeight: 400,
            color: "#000",
          })}
        >
          Договор
        </NavLink>
        <NavLink
          to="/layout/document/annex_agreement"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline blue" : "none",
            textUnderlineOffset: isActive ? "7px" : "0px",
            fontSize: 32,
            fontWeight: 400,
            color: "#000",
          })}
        >
          Приложение
        </NavLink>
        <NavLink
          to="/layout/document/act"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline blue" : "none",
            textUnderlineOffset: isActive ? "7px" : "0px",
            fontSize: 32,
            fontWeight: 400,
            color: "#000",
          })}
        >
          Акт
        </NavLink>
        <NavLink
          to="/layout/document/score"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline blue" : "none",
            textUnderlineOffset: isActive ? "7px" : "0px",
            fontSize: 32,
            fontWeight: 400,
            color: "#000",
          })}
        >
          Счет
        </NavLink>
        <NavLink
          to="/layout/document/cheque"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline blue" : "none",
            textUnderlineOffset: isActive ? "7px" : "0px",
            fontSize: 32,
            fontWeight: 400,
            color: "#000",
          })}
        >
          Документ
        </NavLink>
      </Box>
    </Box>
  );
};
