import React from 'react';

// URL of the API

///////const handleEscapeButton = [RandomPokemon];

////handleCatchButton + handleEscapeButton == { Buttons };

const Buttons = async ({ handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>Catch</button>
      <button onClick={handleClick}>Escape</button>
    </div>
  );
};

export default Buttons;
