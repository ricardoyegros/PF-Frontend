import * as React from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { updateUser } from '../../redux/actions';


const CustomSlider = styled(Slider)({
  width: 300,
  color: 'var(--color)',
  '& .MuiSlider-thumb': {
    [`&:hover, &.Mui-focusVisible`]: {
      boxShadow: '0px 0px 0px 8px var(--box-shadow)',
    },
    [`&.Mui-active`]: {
      boxShadow: '0px 0px 0px 14px var(--box-shadow)',
    },
  },
});

const successVars = {
  '--color': '#4caf50',
  '--box-shadow': 'rgb(76, 175, 80, .16)',
};

const defaultVars = {
  '--color': '#1976d2',
  '--box-shadow': 'rgb(25, 118, 210, .16)',
};

export default function OnOff() {

    const dispatch = useDispatch();
    let token = localStorage.token;
    
    let user = useSelector((state) => state.userIdReducer.userId); //el que traemos
    //const [userNow, setUserNow ] = useState(user.isAdmin);  // solo isAdmin
    //const [userId, setUserId] =useState(user);      //todo el user

    const [vars, setVars] = useState(defaultVars);
    
    const handleChange = (event) => {
    setVars(event.target.checked ? successVars : defaultVars);
    };    
        
    console.log(user);
    

  return (
    <React.Fragment>
      <FormControlLabel
        control={
          <Switch
            checked={vars === successVars}
            onChange={handleChange}
            color="primary"
            value="dynamic-class-name"
          />
        }
        label="Admin"
      />
      
    </React.Fragment>
  );
}
