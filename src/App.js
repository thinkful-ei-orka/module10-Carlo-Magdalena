import React from 'react';
import HelloWorld from './state-drills/HelloWorld'; 
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

// function App() {
//   return (
//     <main className='App'>
//       <RouletteGun bulletInChamber={8} />
//     </main>
//   );
// }

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

class App extends React.Component {
  render() {
    return <div>
      <Accordion sections={sections} />
    </div>
  }
}

export default App