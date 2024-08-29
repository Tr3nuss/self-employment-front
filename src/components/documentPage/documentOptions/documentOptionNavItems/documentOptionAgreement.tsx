import { Box, TextField } from "@mui/material";
import { FC } from "react";

export const DocumentAgreementPage: FC = () => {
  return (
    <Box sx={{ maxWidth: "1296px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextField
          sx={{ width: 375 }}
          label="Название договора"
          variant="standard"
        />
        <TextField
          sx={{ width: 375 }}
          label="Номер договора"
          variant="standard"
        />
        <TextField sx={{ width: 243 }} label="Дата начала договора" />
        <TextField sx={{ width: 243 }} label="Дата окончания договора" />
      </Box>
    </Box>
  );
};
