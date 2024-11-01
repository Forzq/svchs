
import "../ideas/Ideas.css";
import kaktus1 from "../../img/kekubungPlants1.svg";
import vector from "../../img/vector5.svg";

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
                <div class="frame5GridItem">
                    <div class="frame5ItemDiv">
                    <p>We Make It Easy To Find The Great Design Talent,<br/> Easier...</p>
                    <p>Road Design Handbook For The International Road...</p>
                    <p>The Best Kept Secrets About Creative People</p>
                    <p>We Make It Easy To Find The Great Design Talent, Easier...</p>
                    </div>
                </div>
            </div>
            <div class="frame5MiniPic">
                See All
                <img src={vector} alt="mgg"/>
            </div>
            
        </div>
      
        )
    }