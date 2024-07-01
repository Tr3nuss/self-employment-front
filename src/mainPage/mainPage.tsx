import { Box, Button } from "@mui/material";
import { FC } from "react";
import payments from "../images/mainImages/payments.svg";
import documents from "../images/mainImages/documents.svg";
import customers from "../images/mainImages/customers.svg";

export const MainPage: FC = () => {
  return (
    <>
      <Box sx={{ maxWidth: "1740px" }}>
        <Box sx={{ maxWidth: "1460px", margin: "20px auto" }}>
          <p style={{ fontSize: 32, fontWeight: 400 }}>Иванов Иван Иванович</p>

          <Box sx={{ display: "flex", gap: "60px", marginTop: "40px" }}>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                width: 260,
                height: 64,
                textTransform: "none",
                bgcolor: "#CCCCFF",
                borderRadius: "12px",
                boxShadow: "0px 5px 15px 0px #1D1D9340",
              }}
            >
              <img src={payments} alt="payment" />
              <p style={{ color: "#000", fontSize: 16 }}>Добавить платеж</p>
            </Button>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                width: 260,
                height: 64,
                textTransform: "none",
                bgcolor: "#CCCCFF",
                borderRadius: "12px",
                boxShadow: "0px 5px 15px 0px #1D1D9340",
              }}
            >
              <img src={documents} alt="document" />
              <p style={{ color: "#000", fontSize: 16 }}>Добавить документ</p>
            </Button>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                width: 260,
                height: 64,
                textTransform: "none",
                bgcolor: "#CCCCFF",
                borderRadius: "12px",
                boxShadow: "0px 5px 15px 0px #1D1D9340",
              }}
            >
              <img src={customers} alt="customer" />
              <p style={{ color: "#000", fontSize: 16 }}>Добавить заказчика</p>
            </Button>
          </Box>

          <Box
            sx={{
              maxWidth: "770px",
              marginTop: "72px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: 32 }}>Прибыль за последний месяц</p>
            <p style={{ fontSize: 32 }}>+38 000 ₽</p>
          </Box>
        </Box>
      </Box>
    </>
  );
};
