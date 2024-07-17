import { useState } from "react";  

const App = () => {
  const [selectedColor, setSelectedColor] = useState("cyan");

  return (
    
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={ selectedColor }>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="blue" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="red" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="black" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
      </div>
    </div>
  );
};

const Color = ({ color, setSelectedColor, selectedColor }) => {

  const classNamesString = `${color} ${selectedColor === color ? 'selected' : ''}`
  
  return <div className={classNamesString} onClick={() => setSelectedColor(color)}></div>;

};

export default App;