import './App.css'
import Box from './components/Box';
import Boxes from './data/Boxes';
import { useState } from 'react';

function App() {
  const [square,setSquare] = useState(Boxes);

  


  return (
    <>
    {
      square.map((square)=>{
        return(
          <Box 
            key={square.id} 
            on={square.on} 
        />
        )
      })
    }
        
    </>
  )
}

export default App
