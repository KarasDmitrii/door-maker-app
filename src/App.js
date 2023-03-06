
import './App.css';
import { Constructor } from './components/constructor/Constructor';
import { useState } from 'react';
import { DoorContext } from './context/Context';
import { ParamDataContext } from './context/Context';
function App() {

  const doorState = useState({
    colorPrint: 'Красный',
    colorSkin: 'Красный',
    colorHandle: 'Красный',
    height: '1800 мм',
    width: '700 мм',
    opened: 'Левое',
    acces: []
  })
  const paramDataState = useState(null)
  return (
    <ParamDataContext.Provider value={paramDataState}>
      <DoorContext.Provider value={doorState}>
        <div className="App">
          <Constructor />
        </div>
      </DoorContext.Provider>
    </ParamDataContext.Provider>

  );
}

export default App;
