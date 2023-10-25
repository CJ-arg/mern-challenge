import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioInputProject({ project, onInputChange }) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange({
      target: {
        name: "project",
        value: (event.target as HTMLInputElement).value,
      },
    });
  };

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Proyecto</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={project}
        onChange={handleChange}
      >
        <FormControlLabel value="BANCO" control={<Radio />} label="Banco" />
        <FormControlLabel value="APP" control={<Radio />} label="App" />
        <FormControlLabel
          value="PERSONAL"
          control={<Radio />}
          label="Personal"
        />
      </RadioGroup>
    </FormControl>
  );
}
