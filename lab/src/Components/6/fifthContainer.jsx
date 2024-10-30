
import "../../Components/6/fifthContainer.css";
import plant5 from "../../img/plant5.svg";

export default function fifthContainer(){

        return(
            <div class="fifthContainer">
        <div class="rowContainerFeat">
          <div>
            <div class="MontserratFont favouriteDiv">
              <a href="#thirdContainer" class="favourite data-lang KFM" data-lang="fav">
                Get your favourites plant on our shop now
              </a>
              <button class="visitShop NunitoFont data-lang visitButton" data-lang="visit">
                  Visit Shop
              </button>
            </div>
          </div>
          <div>
          <img src={plant5} class="plant5"></img>
          </div>
        </div>
      </div>
        )
    }