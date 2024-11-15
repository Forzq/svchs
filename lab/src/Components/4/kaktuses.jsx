import "../../Components/4/kaktuses.css";
import kaktusPlants from "../../img/kaktusPlants.svg";
import landakPlants from "../../img/landakPlants.svg";
import kekubungPlants1 from "../../img/kekubungPlants1.svg";
import kekubungPlants3 from "../../img/kekubungPlants3.svg";

// Создаем компонент карточки
const PlantCard = ({ imgSrc, name, price, imgClassName }) => {
  return (
    <div className="item">
      <img src={imgSrc} className={imgClassName} alt={name} />
      <div className="MontserratFont kaktusText land">
        <p className="data-lang" data-lang={name.toLowerCase().replace(" ", "")}>
          {name}
        </p>
        <p>IDR {price}</p>
      </div>
    </div>
  );
};

export default function Kaktuses() {
  // Создаем массив данных для карточек
  const plants = [
    { imgSrc: kaktusPlants, name: "Kaktus Plants", price: 85000, imgClassName: "kaktusImg" },
    { imgSrc: landakPlants, name: "Landak Plants", price: 115000, imgClassName: "kaktusImg" },
    { imgSrc: kekubungPlants1, name: "Kecubung Plants", price: 85000, imgClassName: "kaktusImg" },
    { imgSrc: kaktusPlants, name: "Kecubung Plants", price: 85000, imgClassName: "kaktusImg" },
    { imgSrc: kekubungPlants3, name: "Kecubung Plants", price: 85000, imgClassName: "kecu2Img" },
    { imgSrc: kaktusPlants, name: "Kecubung Plants", price: 85000, imgClassName: "kaktusImg" },
    { imgSrc: landakPlants, name: "Landak Plants", price: 115000, imgClassName: "kaktusImg" },
    { imgSrc: kekubungPlants3, name: "Kecubung Plants", price: 85000, imgClassName: "kecu2Img" },
    { imgSrc: kekubungPlants1, name: "Kecubung Plants", price: 105000, imgClassName: "kaktusImg" },
  ];

  return (
    <div className="kaktuses">
      {/* Отображаем карточки, используя метод map */}
      {plants.map((plant, index) => (
        <PlantCard key={index} {...plant} />
      ))}
    </div>
  );
}
