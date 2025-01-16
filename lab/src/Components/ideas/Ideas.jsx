
import "../ideas/Ideas.css";
import kaktus1 from "../../img/kekubungPlants1.svg";
import vector from "../../img/vector5.svg";
import Button from "../mui/button.jsx"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {Box} from '@mui/material';

export default function Ideas(){
    
        return(
            <div class="frame5">
            <div class="frame4Text">
                <b>Ideas have a place here</b>
                <p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
            </div>
            <div class="frame5Main">
                <div class="frame5GridItem">
                    <img src={kaktus1} alt="dff"/>
                </div>
                <Box sx={{display:"flex", flexDirection:"column",alignItems:"center", gap:'1em',justifyContent:"center",height:"400px"}}> 

            <Accordion sx={{width:"90%", }}>
            <AccordionSummary sx={{fontSize:"18px"}} id="panel-header" aria-controls="panel-content">
            We Make It Easy To Find The Great Design Talent, Easier..
            </AccordionSummary>
            <AccordionDetails>
            Road Design Handbook For The International Road...
            </AccordionDetails>
            <AccordionDetails>
            The Best Kept Secrets About Creative People
            </AccordionDetails>
            <AccordionDetails>
            We Make It Easy To Find The Great Design Talent, Easier..
            </AccordionDetails>
            </Accordion>
        </Box>
            </div>
            <div class="frame5MiniPic">
                <Button text="See All" color="rgb(0,0,0)"/>
                <img src={vector} alt="mgg"/>
            </div>
            
        </div>
      
        )
    }