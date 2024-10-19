import {Component} from "react";
import "../../Components/5/rowContainerFeat.css";
import plantOnATable from "../../img/plantOnATable.svg";
import plantsOnAWall from "../../img/plantsOnAWall.svg";

class rowContainerFeat extends Component{
    render(){
        return(
            <div class="rowContainerFeat">
        <div class="MontserratFont">
          <p class="buyMore data-lang" data-lang="buyMore">
            Buy more plants, it helps you to be relaxed 
          </p>
          <p class="buyMoreLorem data-lang" data-lang="buyMoreLor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Morbi gravida gravida aliquam. Pellentesque et lobortis nisl. 
            Sed et mauris justo. Nulla eu enim non mauris maximus dignissim. 
            Maecenas vitae eros sapien. Quisque pellentesque tempus dignissim.
          </p>
          <div class="plantOnATableDiv">
            <img src={plantOnATable}></img>
          </div>
        </div>
        <div>
          <img src={plantsOnAWall} class="plantsOnAWall"></img>
        </div>
      </div>
        )
    }
      
      
}
export default rowContainerFeat