import { FC } from "react";
import { Box, Checkbox, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./register.css";

export const RegisterPage: FC = () => {
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
        <form className="register-input-field">
          <h2 className="register-title">Регистрация</h2>
          <TextField
            sx={{ width: "500px" }}
            name="username"
            label="username"
            variant="standard"
          />
          <TextField
            name="email"
            label="email"
            variant="standard"
            sx={{ width: "500px" }}
          />
          <TextField
            name="password"
            label="password"
            variant="standard"
            type="password"
            sx={{ width: "500px" }}
          />
          <TextField
            name="confirmPassword"
            id="standard-basic"
            label="confirmPassword"
            variant="standard"
            type="password"
            sx={{ width: "500px" }}
          />

          <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <Checkbox />
            <Link to="*" className="accept-service-link">
              Я принимаю условия сервиса
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <Checkbox />
            <Link to="*" className="accept-policy-link">
              Я согласен(а) с политикой конфедициальности
            </Link>
          </Box>

          <Button
            type="submit"
            sx={{
              width: "500px",
              textTransform: "none",
              borderRadius: "30px",
              color: "#fff",
              bgcolor: "gray",
              "&:hover": { background: "#1047A9" },
            }}
          >
            Зарегистрироваться
          </Button>
        </form>
      </Box>
    </>
  );
};
