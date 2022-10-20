import { Button, Grid } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from "@emotion/styled";








export function AboutCard({name,image, linkedin,telefono,github , rol}){
    return (
            <>

            <div class="shadow-lg p-0 mb-5 bg-white rounded" style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                width:"100%"}}>
             <div>
            <img class="card-img-top" src={image} alt="Card image cap" style={{
                "display":"flex",
                "alignItems":"center",
                "width":"21rem",
                "height":"20rem"
                
              }}/>
         </div>
            <div style={{
                "margin":"2rem 0 2rem 0"
            }}>
             <h5 class="card-title">{name}</h5>
             <p class="card-text" style={
                {"marginTop":"2rem"}
             }>{rol}</p>
            <div style={{
                "display":"flex",
                "gap":"1.5rem",
            }}>
           <Button href={linkedin} target={"_blank"} ><LinkedInIcon htmlColor="#B0B0B0" fontSize="large"/></Button>
           <Button href={github} target={"_blank"} varitan={"outlined"}><GitHubIcon htmlColor="#B0B0B0" fontSize="large"/></Button>
           </div>
           </div>
           </div>     
            </>
        
    )


}


