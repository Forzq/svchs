import React, { useState } from 'react';
import "../../Components/4/kaktuses.css";
import kaktusPlants from "../../img/kaktusPlants.svg";
import landakPlants from "../../img/landakPlants.svg";
import kekubungPlants1 from "../../img/kekubungPlants1.svg";
import kekubungPlants3 from "../../img/kekubungPlants3.svg";
import RatingComp from "../ratingComp.jsx";

const availableOptions = [
  { imgSrc: kaktusPlants, name: "Kaktus Plants", price: 85000, imgClassName: "kaktusImg" },
  { imgSrc: landakPlants, name: "Landak Plants", price: 105000, imgClassName: "kaktusImg" },
  { imgSrc: kekubungPlants1, name: "Kecubung Plants", price: 85000, imgClassName: "kaktusImg" },
  { imgSrc: kekubungPlants3, name: "Kecubung Plants Big", price: 120000, imgClassName: "kecu2Img" },
];

const PlantCard = ({ imgSrc, name, price, imgClassName, onEdit, onDelete }) => {
  return (
    <div className="item">
      <img src={imgSrc} className={imgClassName} alt={name} />
      <div className="MontserratFont kaktusText land">
        <p className="data-lang">{name}</p>
        <p>IDR {price}</p>
        <button onClick={onEdit}>Изменить</button>
        <button onClick={onDelete}>Удалить</button>
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

const AddModal = ({ onClose, onAdd }) => {
  const [selectedOption, setSelectedOption] = useState(availableOptions[0]);

  const handleAdd = () => {
    onAdd(selectedOption);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <select onChange={e => setSelectedOption(availableOptions[e.target.value])}>
          {availableOptions.map((option, index) => (
            <option key={index} value={index}>
              {option.name} - IDR {option.price}
            </option>
          ))}
        </select>
        <button onClick={handleAdd}>Добавить</button>
      </div>
    </div>
  );
};

export default function Kaktuses() {
  const [plants, setPlants] = useState([]);
  const [editingPlant, setEditingPlant] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

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

  const handleDelete = (plant) => {
    const updatedPlants = plants.filter(p => p !== plant);
    setPlants(updatedPlants);
  };

  const handleAddPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  const handleOpenAddModal = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  return (
    <div className="kaktuses">
      <button className="addButton" onClick={handleOpenAddModal}>Добавить карточку</button>

      {plants.map((plant, index) => (
        <div key={index}>
          <PlantCard
            {...plant}
            onEdit={() => handleEdit(plant)}
            onDelete={() => handleDelete(plant)}
          />
          <RatingComp />
        </div>
      ))}

      {editingPlant && <EditModal plant={editingPlant} onClose={handleCloseModal} onSave={handleSave} />}
      {showAddModal && <AddModal onClose={handleCloseAddModal} onAdd={handleAddPlant} />}
    </div>
  );
}