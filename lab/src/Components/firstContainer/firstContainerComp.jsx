
import "../firstContainer/firstContainer.css";
import cart from "../../img/cart.svg";
import cottonbro from "../../img/cottonbro.png";
import search from "../../img/search.svg";
import icon8 from "../../img/icons8-пользователь-в-кружке-тип-кожи-3-30.png";
import logo from "../../img/logo.svg";
import menu from "../../img/menu.png";
import leftArrow from "../../img/leftArrow.svg";
import rightArrow from "../../img/rightArrow.svg";
export default function FirstContainer(){
    
        return(
            <div className="firstContainer">
      <div className="cottonDiv">
        <img src={cottonbro} className="cottonbro"></img>
      </div>
      <div className="overlay">

      </div>
        <div className="f1">
          <div className="burger">
            <div className="burgerSC">
              <img src={search} className="burgerImg" onclick="window.location.href='#thirdContainer'"></img>
              <div id="user1">
                <img src={icon8} alt="sd" ></img>
              </div>
              {/* style="width: 40px;" */}
              <img src={cart} className="burgerImg"></img>
            </div>
            <div className="burgSign NunitoFont">
              <button className="burgText signBut1  data-lang" data-lang="signUp">
                Sign Up
              </button>
              <button className="burgText signInBut1 data-lang" data-lang="signIn">
                Sign In
              </button>
              <button className="logOut1 heeboFont data-lang" data-lang="logOut">Log Out</button>
              
            </div>
          </div>
        
      
          <div>
            <div className="logo">
                <img src={logo} className="logoImg"></img>
                <select className="change-lang NunitoFont">
                  <option value="en" >EN</option>
                  <option value="ru" selected>RU</option>
                </select>
                <label className="switch">
                    <input type="checkbox" id="checkbox"></input>
                    <span className="slider round"></span>
                </label>
                <button className="burgJS">
                  <img src={menu} className="burgermenuImg"></img>
                </button>
              </div>
            </div>
              <div className="Header">
            
            <div className="rowContainer1">
              
              <div>
                <img src={search} className="search"></img>
              </div>
              <div>
                <img src={cart} className="cart"></img>
              </div>
              <button className="logOut heeboFont data-lang" data-lang="logOut">Log Out</button>
              <div id="user">
                <img src={icon8} alt="df" ></img>
              </div>
              {/* style="width: 40px;" */}
              <button className="signUPbox NunitoFont signBut">
                <p className="signup  data-lang" data-lang="signUp1">Sign Up</p>
              </button>
              <button className="signINbox NunitoFont">
                <p className="signin data-lang" data-lang="signIn1">Sign In</p>
              </button>
            </div>
          </div>
          
          
          <div className="colContainer MontserratFont">
            <div className="KembangFlowerMantap">
              <a href="#thirdContainer" data-lang="KFM" className=" data-lang KFM">
                Kembang Flower Mantap
              </a>
            </div>
            <div className="KembangLorem">
              <p className=" data-lang" data-lang="KFML">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, 
              </p>
            </div>
            <div className="PrevNextButtons">
              <button className="previousButton MontserratFont">
                <div>
                  <div className="rowArrow">
                    <img src={leftArrow} className="leftArrow"></img>
                    <p className="previous data-lang" data-lang="prev">
                      Previous
                    </p>
                  </div>
                  <p className="kaktus data-lang" data-lang="kaktus">
                    Kaktus Plant
                  </p>
                </div>
              </button>
              <button className="nextButton MontserratFont">
                <div>
                  <div className="rowArrow">
                    <p className="next data-lang" data-lang="next">
                      Next
                    </p>
                    <img src={rightArrow} className="rightArrow"></img>
                  </div>
                  <p className="rahasia data-lang" data-lang="rahasia">
                    Rahasia Plant
                  </p>
                </div>
              </button>
            </div>
          </div>
          </div>
        </div>
        )
    }