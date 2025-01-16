import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addcactus, updatecactus, removecactus, setError } from '../../Redux/taskslice';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const CactusComponent = () => {
  const dispatch = useDispatch();
  const cactus = useSelector(state => state.cactus.items);
  const error = useSelector(state => state.cactus.error);

  const [newItem, setNewItem] = useState({ id: '', name: '' });
  const [editItemId, setEditItemId] = useState(null); 
  const [editName, setEditName] = useState(''); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [isAscending, setIsAscending] = useState(true); 

  const handleAdd = () => {
    const itemId = Number(newItem.id);

    if (isNaN(itemId) || itemId <= 0) {
      dispatch(setError('ID должен быть положительным числом.'));
      return;
    }

    const idExists = cactus.some(item => item.id === itemId);
    if (idExists) {
      dispatch(setError('ID уже существует. Пожалуйста, введите уникальный ID.'));
      return;
    }

    if (!newItem.name) {
      dispatch(setError('Пожалуйста, введите название.'));
      return;
    }

    dispatch(addcactus({ id: itemId, name: newItem.name }));
    setNewItem({ id: '', name: '' });
  };

  const handleEdit = (item) => {
    setEditItemId(item.id);
    setEditName(item.name);
    dispatch(setError(null));
  };

  const handleSave = () => {
    if (!editName) {
      dispatch(setError('Название не может быть пустым.'));
      return;
    }
    dispatch(updatecactus({ id: editItemId, name: editName }));
    setEditItemId(null);
  };

  const handleRemove = (itemId) => {
    dispatch(removecactus(itemId));
  };

  const filteredcactus = cactus
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => isAscending ? a.id - b.id : b.id - a.id);

  return (
    <div className="container mt-5">
      <h2>Управление кактусами</h2>
      {error && <p className="text-danger">{error}</p>}

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="ID"
          value={newItem.id}
          onChange={(e) => setNewItem({ ...newItem, id: e.target.value })}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Название"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <button className="btn btn-primary" onClick={handleAdd}>Добавить кактус</button>
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Поиск по названию"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-secondary" onClick={() => setIsAscending(!isAscending)}>
          Сортировать по {isAscending ? 'убыванию' : 'возрастанию'}
        </button>
      </div>

      <ul className="list-group">
        {filteredcactus.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {editItemId === item.id ? (
              <>
                <input
                  type="text"
                  className="form-control me-2"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button className="btn btn-success me-2" onClick={handleSave}>Сохранить</button>
                <button className="btn btn-danger" onClick={() => setEditItemId(null)}>Отмена</button>
              </>
            ) : (
              <>
                <span>{item.name}</span>
                <div>
                  <button className="btn btn-warning me-2" onClick={() => handleEdit(item)}>Редактировать</button>
                  <button className="btn btn-danger" onClick={() => handleRemove(item.id)}>Удалить</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CactusComponent;