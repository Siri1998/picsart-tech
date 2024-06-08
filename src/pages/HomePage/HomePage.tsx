import React, { useState, useEffect, FormEvent } from 'react';
import { fetchItems, addItem, deleteItem } from '../../services/api';
import { Item } from '../../types/Global';

const HomePage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchItems().then(response => setItems(response.data));
  }, []);

  const handleAddItem = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addItem({ title, completed: false }).then(response => {
        setItems([...items, response.data]);
        setTitle('');
      });
    }
  };

  const handleDeleteItem = (id: number) => {
    deleteItem(id).then(() => {
      setItems(items.filter(item => item.id !== id));
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new item"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title} <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
