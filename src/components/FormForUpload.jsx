import React from 'react'
import { useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import { Grid } from "@mui/material";
import {TextField} from "@mui/material";
import {FormControlLabel} from "@mui/material";
import {FormControl} from "@mui/material";
import {FormLabel} from "@mui/material";
import {RadioGroup} from "@mui/material";
import {Radio} from "@mui/material";
import {Select} from "@mui/material";
import {MenuItem} from "@mui/material";
import {Slider} from "@mui/material";
import {Button} from "@mui/material";
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    palette: {
      primary: {
        // aqui el color primario un gris suave para que el logo se pueda ver.
        main: "#cfcfcf",
        light:"#cfcfcf",
        dark:"#707070"
      },
      secondary: {
        // de secundario un azul suave para evitar que sea muy chocante 
        main: '#4f83cc',
        light:"#4f83cc",
        dark:"#002f6c"
      },
    },
    //aqui aumente un poco el tamaño de todo
    typography : {
      fontSize: 12
    }
  });



function FormForUpload() {
    const [formValues, setFormValues] = useState("");
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };
    const handleSliderChange = (name) => (e, value) => {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formValues);
    };
  return (
    <ThemeProvider theme={theme}>
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Product"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="age-input"
            name="age"
            label=""
            type="number"
            value={formValues.age}
            onChange={handleInputChange}
          />
        </Grid>
      {/*   <Grid item>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={formValues.gender}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="male"
                value="male"
                control={<Radio size="small" />}
                label="Male"
              />
              <FormControlLabel
                key="female"
                value="female"
                control={<Radio size="small" />}
                label="Female"
              />
              <FormControlLabel
                key="other"
                value="other"
                control={<Radio size="small" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid> */}
   {/*      <Grid item>
          <FormControl>
            <Select
              name="os"
              value={formValues.os}
              onChange={handleInputChange}
            >
              <MenuItem key="mac" value="mac">
                Mac
              </MenuItem>
              <MenuItem key="windows" value="windows">
                Windows
              </MenuItem>
              <MenuItem key="linux " value="linux">
                Linux
              </MenuItem>
            </Select>
          </FormControl>
        </Grid> */}
       
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
    </ThemeProvider>
  );
}

export default FormForUpload;