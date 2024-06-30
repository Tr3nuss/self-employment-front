import { NavLink } from "react-router-dom";
import { Box, Autocomplete, TextField } from "@mui/material";
import { FC, useState } from "react";
import { NaturalPersonPage } from "./customersTypes/naturalPerson";
import { IndividualPerson } from "./customersTypes/individualPerson";
import { SocietyPerson } from "./customersTypes/societyPerson";

export const CustomersPage: FC = () => {
  interface ICustomerSubject {
    label: string;
  }

  const subjects: ICustomerSubject[] = [
    { label: "Физическое лицо" },
    { label: "ИП" },
    { label: "ООО" },
  ];

  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <>
      <Box sx={{ maxWidth: "1740px" }}>
        <Box sx={{ maxWidth: "1460px", margin: "20px auto" }}>
          <p>Главная / Заказчики</p>

          <Box sx={{ display: "flex", gap: "100px", marginTop: "25px" }}>
            <NavLink
              to="/layout/customers"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline  blue" : "none",
                fontSize: 32,
                fontWeight: 400,
                color: "#000",
              })}
            >
              Заказчики
            </NavLink>
            <NavLink
              to="*"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline dotted blue" : "none",
                fontSize: 32,
                fontWeight: 400,
                color: "#000",
              })}
            >
              Сделки
            </NavLink>
          </Box>

          <p style={{ marginTop: "40px", fontSize: "32px" }}>
            Добавить заказчика
          </p>

          <Autocomplete
            disablePortal
            options={subjects}
            getOptionLabel={(option) => option.label}
            onChange={(event, value) => setSelectedSubject(value)}
            sx={{ width: 300, marginTop: "40px" }}
            renderInput={(params) => (
              <TextField {...params} label="Субъекты" variant="standard" />
            )}
          />

          {selectedSubject && selectedSubject.label === "Физическое лицо" && (
            <NaturalPersonPage />
          )}

          {selectedSubject && selectedSubject.label === "ИП" && (
            <IndividualPerson />
          )}

          {selectedSubject && selectedSubject.label === "ООО" && (
            <SocietyPerson />
          )}
        </Box>
      </Box>
    </>
  );
};
