import React, { useState, useEffect, FormEvent } from 'react';
import { fetchItems, addItem, deleteItem } from '../../services/api';

const Header = () => {
  return (
    <div>
      <h1>HEADER</h1>
    </div>
  );
};

export default Header;
