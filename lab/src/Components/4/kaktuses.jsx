
import "../../Components/4/kaktuses.css";
import kaktusPlants from "../../img/kaktusPlants.svg";
import landakPlants from "../../img/landakPlants.svg";
import kekubungPlants1 from "../../img/kekubungPlants1.svg";
import kekubungPlants3 from "../../img/kekubungPlants3.svg";

export default function Kaktuses(){

        return(
            <div class="kaktuses">
                <div class="item">
                  <img src={kaktusPlants} class="kaktusImg"></img>
                  <div class="MontserratFont kaktusText land">
                    <p class=" data-lang" data-lang="kaktus1">
                      Kaktus Plants
                    </p>
                    <p>
                      IDR 85.000
                    </p>
                  </div>
                </div>
                <div class="item">
                  <img src={landakPlants} class="kaktusImg"></img>
                  <div class="MontserratFont kaktusText land">
                    <p data-lang="landak" class=" data-lang">
                      Landak Plants
                    </p>
                    <p>
                    {/* style="font-weight: 600"> */}
                      IDR 105.000
                    </p>
                  </div>
                </div>
                <div class="item">
                  <img src={kekubungPlants1} class="kaktusImg"></img>
                  <div class="MontserratFont kaktusText kecu">
                    <p data-lang="kecub" class=" data-lang">
                      Kecubung Plants
                    </p>
                    <p>
                    {/* style="font-weight: 600"> */}
                      IDR 85.000
                    </p>
                  </div>
                </div>
                <div class="item">
                  <img src={kaktusPlants} class="kaktusImg"></img>
                  <div class="MontserratFont kaktusText kecu">
                    <p  data-lang="kecub1" class=" data-lang">
                      Kecubung Plants
                    </p>
                    <p>
                    {/* style="font-weight: 600" */}
                      IDR 85.000
                    </p>
                  </div>
                </div>
                <div class="item">
                  <img src={kekubungPlants3} class="kecu2Img"></img>
                  <div class="MontserratFont kaktusText kecubung2">
                    <p  class=" data-lang" data-lang="kecub2">
                    {/* style="font-weight: 400;" */}
                      Kecubung Plants
                    </p>
                    <p>
                      IDR 85.000
                    </p>
                  </div>            
                </div>
                <div class="item">
                  <img src={kaktusPlants} class="kaktusImg"></img>
                  <div class="MontserratFont kaktusText land">
                    <p data-lang="landak" class=" data-lang">
                      Kecubung Plants
                    </p>
                    <p>
                      IDR 85.000
                    </p>
                  </div>
                </div>
                <div class="item">
                  <img src={landakPlants} class="kaktusImg"></img>
                  <div class="MontserratFont kaktusText land">
                    <p data-lang="landak" class=" data-lang">
                      Landak Plants
                    </p>
                    <p>
                      IDR 105.000
                    </p>
                  </div>
                </div>
                <div class="item">
                  <img src={kekubungPlants3} class="kecu2Img"></img>           
                  <div class="MontserratFont kaktusText land">
                    <p data-lang="landak" class="data-lang">
                      Kecubung Plants
                    </p>
                    <p>
                      IDR 85.000
                    </p>
                  </div>
                </div>
                <div class="item">
                  <img src={kekubungPlants1} class="kaktusImg"></img>
                  <div class="MontserratFont kaktusText land">
                    <p data-lang="landak" class=" data-lang">
                      Kecubung Plants
                    </p>
                    <p>
                      IDR 105.000
                    </p>
                  </div>
                </div>
              </div>
        )
    }