import { Box, Checkbox, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { FC, FormEvent, useRef, useState } from "react";
import "./register.css";
import { IRegisterData } from "../../shared/types/registerData";

export const RegisterPage: FC = () => {
  let firstCheckbox: any,
    secondCheckbox: any = useRef<HTMLInputElement>(null);

  const [firstIsChecked, setFirstIsChecked] = useState<boolean>(false);
  const [secondIsChecked, setSecondIsChecked] = useState<boolean>(false);

  const submitColChanging = () => {
    setFirstIsChecked(!firstIsChecked);
    setSecondIsChecked(!secondIsChecked);
  };

  async function sendData(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const sendFormData = new FormData(event.currentTarget);

    const registerData: IRegisterData = {
      username: sendFormData.get("username") as string,
      email: sendFormData.get("email") as string,
      password: sendFormData.get("password") as string,
      confirmPassword: sendFormData.get("confirmPassword") as string,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/users/",
        registerData
      );
      console.log(response.data);

      if (!(registerData.password === registerData.confirmPassword)) {
        throw new Error("Пожалуйста введите нужный пароль");
      }
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
        <form onSubmit={sendData} className="register-input-field">
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
            <Checkbox
              checked={firstIsChecked}
              ref={firstCheckbox}
              onClick={submitColChanging}
            />
            <Link to="*" className="accept-service-link">
              Я принимаю условия сервиса
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <Checkbox
              checked={secondIsChecked}
              ref={secondCheckbox}
              onClick={submitColChanging}
            />
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
