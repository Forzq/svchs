import "../../Components/2/rectangles.css"
import delivery from "../../img/delivery.svg";
import headphones from "../../img/headphones.svg";
import plant from "../../img/plant.svg";
import dollar from "../../img/dollar.svg";
export default function Rectangles (){

        return(
            <div class="rectangles MontserratFont">
        <div class="rect">
          <div class="rowContainer">
            <img src={delivery}></img>
            <p class="rectName delivPlantPriceText delivery data-lang" data-lang="deliv">
              Fast Delivery
            </p>
          </div>
          <div>
            <p class="rectLorem data-lang" data-lang="rectLor1">
              Lorem Ipsum is simply dummy text of the printing 
              and typesetting industry. Lorem Ipsum has been 
              the industry's standard 
            </p>
          </div>
        </div>
        <div class="rect">
          <div class="rowContainer">
            <img src={headphones}></img>
            <p class="rectName customer data-lang" data-lang="cust">
              Great Customer Service
            </p>
          </div>
          <div>
            <p class="rectLorem  data-lang" data-lang="rectLor2">
              Lorem Ipsum is simply dummy text of the printing 
              and typesetting industry. Lorem Ipsum has 
              been the industry's standard 
            </p>
          </div>
        </div>
        <div class="rect">
          <div class="rowContainer">
            <img src={plant}></img>
            <p class="rectName delivPlantPriceText data-lang" data-lang="orig">
              Original Plants
            </p>
          </div>
          <div>
            <p class="rectLorem data-lang" data-lang="rectLor3">
              Lorem Ipsum is simply dummy text of the printing 
              and typesetting industry. Lorem Ipsum has been 
              the industry's standard 
            </p>
          </div>
        </div>
        <div class="rect">
          <div class="rowContainer">
            <img src={dollar}></img>
            <p class="rectName delivPlantPriceText data-lang" data-lang="price">
              Affordable Price
            </p>
          </div>
          <div>
            <p class="rectLorem data-lang" data-lang="rectLor4">
              Lorem Ipsum is simply dummy text of the printing 
              and typesetting industry. Lorem Ipsum has been 
              the industry's standard 
            </p>
          </div>
        </div>
      </div>
        )
      }
      
      
