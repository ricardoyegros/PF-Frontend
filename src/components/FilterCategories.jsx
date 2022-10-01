import * as React from 'react';
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

const categoryNames = [
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

const brandNames = [
  "Intel",
  "AMD",
  "Asus",
  "MSI",
  "Gigabyte",
  "Kingstone",
  "Western Digital",
  "Cougar",
  "HyperX",
  "LG",
  "Adata"
];


export default function FilterCategories() {
//########### Dispatch y Estados Aca###############
  const dispatch = useDispatch()
  // const [brand] = React.useState({});
  const [personName, setPersonName] = React.useState({
    categoryId: false,
    brandId: false,
    sort: false,
    type: false,
    page: false,
    size: false
  });
  //#######################################################
  // Handles Changes Aca###################################
  const handleChange = (event) => {
    event.preventDefault()
    setPersonName({...personName, categoryId : categoryNames.indexOf(event.target.value) + 1})
    dispatch(getCategories({...personName, categoryId : categoryNames.indexOf(event.target.value) + 1}))
  };


  const handleChangeBrand = (event) => {
    event.preventDefault()
    setPersonName({...personName, [event.target.name] : event.target.value})
    dispatch(getCategories({...personName, brandId : brandNames.indexOf(event.target.value) + 1}))
    console.log(brandNames.indexOf(event.target.value) + 1, "soy brandId")
  };
//#################################################################

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
          {categoryNames.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Marcas</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personName.name}
          name={"name"}
          onChange={handleChangeBrand}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {brandNames.map((name) => (
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
