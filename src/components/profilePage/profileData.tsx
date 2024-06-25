import { FC } from "react";
import { Box, TextField } from "@mui/material";
import { passportData } from "../../shared/utils/profilePassportData";

export const ProfileData: FC = () => {
  return (
    <>
      <Box>
        <Box sx={{ display: "flex", gap: "20px", margin: "40px 0px" }}>
          <TextField label="ИНН" variant="standard" sx={{ width: 243 }} />
          <TextField
            label="Адрес регистрации"
            variant="standard"
            sx={{ width: 506 }}
          />
        </Box>

        <p style={{ fontSize: 24, margin: "72px 0px 40px 0px" }}>
          Паспортные данные
        </p>

        <Box sx={{ display: "flex", gap: "20px" }}>
          {passportData.map((item, index) => (
            <TextField
              sx={{ width: item.width }}
              key={index}
              variant="standard"
              label={item.label}
              type={item.type}
            />
          ))}
        </Box>

        <p style={{ fontSize: 24, marginTop: "70px" }}>Платежные реквизиты</p>
      </Box>
    </>
  );
};
