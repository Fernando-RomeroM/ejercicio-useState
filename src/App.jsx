import React, { useState } from 'react';

function App() {
  // Paso 2: Define las variables de estado
  const [name, setName] = useState('Sofía');
  const [newName, setNewName] = useState('');

  // Bonus: Implementa la función changeName
  const changeName = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    if (newName.trim() !== '') {
      setName(newName);
      setNewName('');
    }
  };

  return (
    <div>
      {/* Paso 3: Renderiza el nombre del profesor */}
      <h2>Teacher Name: {name}</h2>

      {/* Paso 4: Renderiza la lista de profesores */}
      <ul>
        <li onClick={() => setName('Data')}>Data</li>
        <li onClick={() => setName('Reyes')}>Reyes</li>
        <li onClick={() => setName('Yolanda')}>Yolanda</li>
      </ul>

      {/* Bonus: Formulario para cambiar el nombre del profesor */}
      <form onSubmit={changeName}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="add a name"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
