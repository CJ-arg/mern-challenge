import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioInput({ status, onInputChange }) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange({
      target: {
        name: "status",
        value: (event.target as HTMLInputElement).value,
      },
    });
  };

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Estado de la tarea
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={status}
        onChange={handleChange}
      >
        <FormControlLabel
          value="BORRADOR"
          control={<Radio />}
          label="Borrador"
        />
        <FormControlLabel
          value="TRABAJO EN CURSO"
          control={<Radio />}
          label="Trabajo en curso"
        />
        <FormControlLabel value="LISTO" control={<Radio />} label="Listo" />
      </RadioGroup>
    </FormControl>
  );
}
