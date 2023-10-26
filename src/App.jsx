import './App.css';
import Box from './components/Box';
import Boxes from './data/Boxes';
import { useState } from 'react';

export default function App() {
  const [square, setSquare] = useState(Boxes);

  function toggle(id) {
    setSquare((prevSquare) => {
      const newSquare = [];
      for (let i = 0; i < prevSquare.length; i++) {
        const currentSquare = prevSquare[i];
        if (currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on,
          };
          newSquare.push(updatedSquare);
        } else {
          newSquare.push(currentSquare);
        }
      }
      return newSquare;
    });
  }

  return (
    <>
      {square.map((box) => {
        return (
          <Box
            key={box.id}
            on={box.on}
            id={box.id}
            toggle={toggle}
          />
        );
      })}
    </>
  );
}
