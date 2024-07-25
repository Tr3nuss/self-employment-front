import { Box, Button, TextField } from "@mui/material";
import "./auth.css";
import { FC, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthPage: FC = () => {
  const navigate = useNavigate();

  const goOnRegisterPage = (history: string) => {
    navigate(history);
  };

  interface IAuthFormData {
    email: string;
    password: string;
  }

  async function sendAuthData(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const authFormData = new FormData(event?.currentTarget);

    const authData: IAuthFormData = {
      email: authFormData.get("email") as string,
      password: authFormData.get("password") as string,
    };

    try {
      const res = await axios.post("http://8000", authData);
    } catch (e) {
      alert(e);
    }
  }

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
        <form onSubmit={sendAuthData} className="auth-input-field">
          <h2 className="auth-title">Авторизация</h2>
          <TextField
            sx={{ width: "500px" }}
            label="E-mail"
            variant="standard"
            type="email"
            name="email"
          />
          <TextField
            sx={{ width: "500px" }}
            label="Пароль"
            variant="standard"
            type="password"
            name="password"
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
              "&:hover": { background: "#1047A9" },
            }}
            onClick={() => goOnRegisterPage("/layout")}
            type="submit"
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
