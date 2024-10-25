import {Component} from "react";
import "../../Components/3/FeaturedCheaper.css";
import downArrow from "../../img/downArrow.svg"


class FeaturedCheaper extends Component{
    render(){
        return(
            <div class="FeaturedCheaper MontserratFont rowContainerFeat">
            <p class="featPlants data-lang" data-lang="feat">
              Featured Plants
            </p>
            <button id="slid1">-</button>
            <button id="slid2">+</button>
            <div class="rowContainerFeat cheaperFirstBorder cheap">
              
              <img src={downArrow} class="downArrow"></img>
            </div>
          </div>
        )
    }
      
      
}
export default FeaturedCheaper