
import React, { useState, useEffect } from 'react';

function ListeInscriptions() {
  const [inscriptions, setInscriptions] = useState([]);
  const [filteredInscriptions, setFilteredInscriptions] = useState([]);
  const [searchVille, setSearchVille] = useState('');

  useEffect(() => {

  }, []);

  useEffect(() => {

    const filtered = inscriptions.filter((inscription) =>
      inscription.ville.toLowerCase().includes(searchVille.toLowerCase())
    );
    setFilteredInscriptions(filtered);
  }, [inscriptions, searchVille]);

  return (
    <div>
      <label>Rechercher par ville:</label>
      <input
        type="text"
        value={searchVille}
        onChange={(e) => setSearchVille(e.target.value)}
      />

      <ul>
        {filteredInscriptions.map((inscription, index) => (
          <li key={index}>
            {inscription.ville}, {inscription.option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeInscriptions;
