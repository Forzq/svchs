
import "../shopOur/ShopOur.css";
import kaktus1 from "../../img/kekubungPlants1.svg";
import kaktus2 from "../../img/kekubungPlants2.svg";
import kaktus3 from "../../img/kekubungPlants3.svg";
import kaktus4 from "../../img/landakPlants.svg";

export default function ShopOur(){
    
        return(
            <div class="shopOur">
            <div class="textShopOur">
                <h3>Shop our latest offers and categories</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Scelerisque in est dui, aliquam,<br/> tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="fourPictures">
                <div class="firstPics2">
                    <div class="firstPicDiv">
                        <div class="firstPicWithText">
                            <img class = "firstPic" src={kaktus1} alt="dds"/>
                            <div class="firstPicText">
                                <p>Laptops</p>
                                    <b>True Laptop<br/>Solution</b>
                            </div>
                        </div>
                        
                    </div>
                    <div class="secondPicDiv">
                        <div class="secondPicWithText">
                            <img src ={kaktus2} class ="secondPic" alt="erer"/>
                            <div class="secondText">
                            <p>Watch</p>
                            <b>Not just<br/>stylisht</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="secondPics2">
                    <div class="thirdPic">
                        <div class="thirdPicWithText">
                            <img src={kaktus3} alt="ddf"></img>
                            <div class="thirdText">
                                <p>Phones</p>
                                <b>Your day to day<br/> life</b>
                            </div>
                        </div>
                    </div>
                    <div class="fourthPic">
                        <div class="fourthPicWithText">
                            <div class="fourthText">
                                <p>Tablet</p>
                                <b>Empower your work</b>
                            </div>
                            <img src={kaktus4} alt="ddf"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        )
    }