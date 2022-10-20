import {
  Grid,
  Typography,
  Box,
} from "@mui/material";


import { AboutCard } from "./AboutCard";

const card = {
  height: "390px",
  border: "#5D6D7E 1px innert",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItem: "center",
  boxShadow: "8px 8px 5px 3px rgba(81, 90, 90 , 0.5)",
  "&:hover": {
    cursor: "pointer",
    border: "#58D68D 2px solid",
    boxShadow: "8px 8px 5px 3px rgba(88, 214, 141, 0.5)",
  },
};

const cardContentImage = {
  display: "flex",
  flexDirection: "column",
  background: "#BFC9CA",
  paddingBottom: "5px",
  marginBottom: "0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardMedia = {
  objectFit: "contain",
  mixBlendMode: "multiply",
  width: "180px",
  height: "160px",
  marginTop: "10px",
  borderRadius: "50%",
  border: "#000 1px solid"
};

const cardInfo = {
  width: "230px",
  height: "100px",
  flexGrow: 1,
};

const cardName = {
  textAlign: "center",
  fontSize: "16px",
};



let nosotros = [
  {
    name: "Billy Mendieta",
    image: "https://avatars.githubusercontent.com/u/85891087?v=4",
    linkedin: "https://www.linkedin.com/in/billy-mendieta-cabrera/",
    github: "https://github.com/oscararald",
    teléfono: "",
    rol: "Backend Developer",
  },
  {
    name: "Ignacio Orellana",
    image: "https://avatars.githubusercontent.com/u/99847633?v=4",
    linkedin: "https://www.linkedin.com/in/ignacio-o-484356246/",
    github: "https://github.com/IgnacioOrellana",
    teléfono: "",
    rol: "Frontend Developer",
  },
  {
    name: "Jander Gomez",
    image: "https://avatars.githubusercontent.com/u/58518358?v=4",
    linkedin: "https://www.linkedin.com/in/jander-gomez-barrueta-8091811a3/",
    github: "https://github.com/Jander1016",
    teléfono: "",
    rol: "Backend Developer",
  },
  {
    name: "Julian David Nuñez",
    image: "https://avatars.githubusercontent.com/u/101426957?v=4",
    linkedin: "",
    github: "https://github.com/juliandavidnunesfranco",
    teléfono: "",
    rol: "Backend Developer",
  },
  {
    name: "Mauricio Murdoch",
    image: "https://avatars.githubusercontent.com/u/91921910?v=4",
    linkedin: "https://www.linkedin.com/in/mauricio-agustin-murdoch-b1658073/",
    github: "https://github.com/Mauricioam",
    teléfono: "",
    rol: "Frontend Developer",
  },
  {
    name: "Miqueas Ledesma",
    image: "https://avatars.githubusercontent.com/u/104766422?v=4",
    linkedin: "https://www.linkedin.com/in/miqueas-ledesma-08a106246/",
    github: "https://github.com/MiqueasLedesma",
    teléfono: "",
    rol: "Fullstack Developer",
  },
  {
    name: "Ricardo Yegros",
    image: "https://avatars.githubusercontent.com/u/104315947?v=4",
    linkedin: "https://www.linkedin.com/in/ricardo-yegros-43623a188/",
    github: "https://github.com/ricardoyegros",
    teléfono: "",
    rol: "Frontend Developer",
  },
];
export default function Nosotros() {
  return (
    <>     <Box mt={5}>
          <Typography variant={"h2"} textAlign={"center"}>Desarrolladores de esta pagina</Typography>
          </Box>
          <Grid container spacing={5}  alignItems={"center"} justifyContent={"center"} mt={8}>
           {nosotros.map((we) => {
             return (
                <Grid item >
               <AboutCard
                 name={we.name}
                 image={we.image}
                 linkedin={we.linkedin}
                 github={we.github}
                 telefono={we.teléfono}
                 rol={we.rol} />
                 </Grid>

);
})}
              </Grid>
  
    </>
  );
}




