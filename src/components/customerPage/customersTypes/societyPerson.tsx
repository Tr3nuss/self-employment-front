import { Box, TextField } from "@mui/material";
import { FC } from "react";
import { SocietyCustomerInputData } from "../../../shared/utils/customerInputData";

export const SocietyPerson: FC = () => {
  return (
    <Box sx={{ maxWidth: "1740px" }}>
      <Box sx={{ maxWidth: "1500px" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {SocietyCustomerInputData.map((item, index) => (
            <TextField
              sx={{ width: item.width }}
              label={item.label}
              variant="standard"
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
