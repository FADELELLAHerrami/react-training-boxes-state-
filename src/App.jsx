import './App.css';
import Box from './components/Box';
import Boxes from './data/Boxes';
import { useState } from 'react';

export default function App() {
  const [square, setSquare] = useState(Boxes);

  function toggle(id) {
    setSquare((prevSquare) => {
      return prevSquare.map((box) => {
        return box.id === id ? { ...box, on: !box.on } : box;
      });
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
