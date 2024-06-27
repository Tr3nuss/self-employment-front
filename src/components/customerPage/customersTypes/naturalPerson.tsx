import { Box, TextField } from "@mui/material";
import { FC } from "react";
import { naturalCustomerInputData } from "../../../shared/utils/customerInputData";
import { customerInputPassportData } from "../../../shared/utils/customerInputData";

export const NaturalPersonPage: FC = () => {
  return (
    <>
      <Box sx={{ maxWidth: "1740px" }}>
        <Box sx={{ maxWidth: "1500px", margin: "40px auto" }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {naturalCustomerInputData.map((item, index) => (
              <TextField
                key={index}
                sx={{ width: item.width }}
                label={item.label}
                variant="standard"
              />
            ))}
          </Box>

          <p style={{ marginTop: "50px", fontSize: 24 }}>Паспортные данные</p>

          <Box sx={{ display: "flex", gap: "20px", marginTop: "20px" }}>
            {customerInputPassportData.map((item, index) => (
              <TextField
                key={index}
                sx={{ width: item.width }}
                label={item.label}
                type={item.type}
                variant="standard"
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
