import { Box, Button, TextField } from "@mui/material";
import "./auth.css";
import { FC } from "react";
import { Link } from "react-router-dom";

export const AuthPage: FC = () => {
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
        <form className="auth-input-field">
          <h2 className="auth-title">Авторизация</h2>
          <TextField
            sx={{ width: "500px" }}
            label="e-mail"
            variant="standard"
          />
          <TextField
            sx={{ width: "500px" }}
            label="Пароль"
            variant="standard"
            type="password"
          />

          <Button
            sx={{
              width: "500px",
              bgcolor: "#2618B1",
              color: "white",
              fontSize: "24px",
              fontWeight: "600",
              textTransform: "none",
              borderRadius: "30px",
            }}
          >
            Войти
          </Button>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Link to="/register" className="auth-reg-link">
              Регистрация
            </Link>
            <Link to="/recpass" className="forgot-password-link">
              Забыли пароль?
            </Link>
          </Box>
        </form>
      </Box>
    </>
  );
};
