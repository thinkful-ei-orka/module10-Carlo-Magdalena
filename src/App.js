import React from 'react';
import HelloWorld from './state-drills/HelloWorld'; 
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

function App() {
  return (
    <main className='App'>
      <RouletteGun bulletInChamber={8} />
    </main>
  );
}

export default App;