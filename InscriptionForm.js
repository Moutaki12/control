
import React, { useState } from 'react';
import Autocomplete from './Autocomplete';

function InscriptionForm() {
  const [ville, setVille] = useState('');
  const [option, setOption] = useState('');

  const handleVilleSelect = (value) => {
    setVille(value);
  };

  const handleOptionSelect = (value) => {
    setOption(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Ville:</label>
      <Autocomplete
        suggestions={['Casa', 'Rabat', 'Kenitra', 'Merrakech', 'Meknes']}
        onSelect={handleVilleSelect}
      />

      <label>Option:</label>
      <Autocomplete
        suggestions={['Dev Digital', 'Dev Mobile', 'Infra Digitale']}
        onSelect={handleOptionSelect}
      />

      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default InscriptionForm;
