import React, { useState } from 'react';
import "../../Components/4/kaktuses.css";
import kaktusPlants from "../../img/kaktusPlants.svg";
import landakPlants from "../../img/landakPlants.svg";
import kekubungPlants1 from "../../img/kekubungPlants1.svg";
import kekubungPlants3 from "../../img/kekubungPlants3.svg";

const PlantCard = ({ imgSrc, name, price, imgClassName, onEdit }) => {
  return (
    <div className="item">
      <img src={imgSrc} className={imgClassName} alt={name} />
      <div className="MontserratFont kaktusText land">
        <p className="data-lang">{name}</p>
        <p>IDR {price}</p>
        <button onClick={onEdit}>Изменить</button>
      </div>
    </div>
  );
};

const EditModal = ({ plant, onClose, onSave }) => {
  const [editedName, setEditedName] = useState(plant.name);
  const [editedPrice, setEditedPrice] = useState(plant.price);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
        <input type="number" value={editedPrice} onChange={(e) => setEditedPrice(parseInt(e.target.value, 10) || 0)} />
        <button onClick={() => onSave({ ...plant, name: editedName, price: editedPrice })}>Сохранить</button>
      </div>
    </div>
  );
};


export default function Kaktuses() {
  const [plants, setPlants] = useState([
    { imgSrc: kaktusPlants, name: "Kaktus Plants", price: 85000, imgClassName: "kaktusImg" },
    { imgSrc: landakPlants, name: "Landak Plants", price: 115000, imgClassName: "kaktusImg" },
    { imgSrc: kekubungPlants1, name: "Kecubung Plants", price: 85000, imgClassName: "kaktusImg" },
    { imgSrc: kaktusPlants, name: "Kecubung Plants", price: 85000, imgClassName: "kaktusImg" },
    { imgSrc: kekubungPlants3, name: "Kecubung Plants", price: 85000, imgClassName: "kecu2Img" },
    { imgSrc: kaktusPlants, name: "Kecubung Plants", price: 85000, imgClassName: "kaktusImg" },
    { imgSrc: landakPlants, name: "Landak Plants", price: 115000, imgClassName: "kaktusImg" },
    { imgSrc: kekubungPlants3, name: "Kecubung Plants", price: 85000, imgClassName: "kecu2Img" },
    { imgSrc: kekubungPlants1, name: "Kecubung Plants", price: 105000, imgClassName: "kaktusImg" },
  ]);
  const [editingPlant, setEditingPlant] = useState(null);

  const handleEdit = (plant) => {
    setEditingPlant(plant);
  };

  const handleCloseModal = () => {
    setEditingPlant(null);
  };

  const handleSave = (updatedPlant) => {
    setPlants(plants.map(p => (p === editingPlant ? updatedPlant : p)));
    setEditingPlant(null);
  };

  return (
    <div className="kaktuses">
      {plants.map((plant, index) => (
        <PlantCard key={index} {...plant} onEdit={() => handleEdit(plant)} />
      ))}
      {editingPlant && (
        <EditModal
          plant={editingPlant}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      )}
    </div>
  );
}