import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

// const Box= styled.div`

// `;

export default function DatePicker() {
  return (
    <>
      {/* <Box>
        <Datetime open="true" timeFormat="false"  input="false"  />
        </Box> */}

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker orientation="portrait" openTo="day" />
      </LocalizationProvider>
    </>
  );
}
