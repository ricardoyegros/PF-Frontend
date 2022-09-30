import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { getCategories } from '../redux/actions';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Mother Board",
  "Memory",
  "Processor",
  "Disk",
  "Case",
  "Graphics card GPU",
  "Monitor",
  "Keyboard",
  "Cooler"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function FilterCategories() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState({
    categoryId: "",
    sortBy:{
      type:"id",
      sort:"ASC"
    }
  });
  const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()
    setPersonName({...personName, categoryId : names.indexOf(event.target.value) + 1})
    dispatch(getCategories(event.target.value))
    console.log(personName)
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Categorias</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personName.name}
          name={"name"}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
