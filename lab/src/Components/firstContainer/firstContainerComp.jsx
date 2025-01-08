
import "../firstContainer/firstContainer.css";
// import cart from "../../img/cart.svg";
import cottonbro from "../../img/cottonbro.png";
import search from "../../img/search.svg";
import icon8 from "../../img/icons8-пользователь-в-кружке-тип-кожи-3-30.png";
import logo from "../../img/logo.svg";
import menu from "../../img/menu.png";
import leftArrow from "../../img/leftArrow.svg";
import rightArrow from "../../img/rightArrow.svg";
import {Link} from "react-router-dom";
import Account from '../mui/Account'
import ButtonGroup from "../mui/buttonGroup";
import  Tooltip  from "../mui/Tooltip";
import SearchAppBar from "../mui/Search";
export default function FirstContainer(){
    
        return(
            <div className="firstContainer">
      <div className="cottonDiv">
        <img src={cottonbro} className="cottonbro"></img>
      </div>
      <div className="overlay">

      </div>
        <div className="f1">
          
        
      
          <div>
            <div className="logo">
                <img src={logo} className="logoImg"></img>
                <select className="change-lang NunitoFont">
                  <option value="en" >EN</option>
                  <option value="ru" selected>RU</option>
                </select>

              </div>
            </div>
              <div className="Header">
            
            <div className="rowContainer1">
              
              <div>
                <SearchAppBar/>
              </div>
              <div>
                <Tooltip/>
              </div>
              <button className="logOut heeboFont data-lang" data-lang="logOut">Log Out</button>
              <div id="user">
                <img src={icon8} alt="df" ></img>
              </div>
              {/* style="width: 40px;" */}
              <Account/>
              <ButtonGroup text1="Sign In" text2="Register"/>
     
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
              <Link to="/Ideas">
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
              </Link>
            </div>
          </div>
          </div>
        </div>
        )
    }