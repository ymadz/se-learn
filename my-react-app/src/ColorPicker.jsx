import React, { useState } from "react";

function ColorPicker() {
  const [hex, setHex] = useState("#FFFFFF");

  return (
    <div>
      <h1 className="font-bold text-2xl text-center">Color Picker</h1>
      <div style={{backgroundColor: hex}} className="p-20 border-2 rounded-md mt-5 ">
        <p>Selected Color: {hex}</p>
      </div>
      <div className="flex justify-center mt-5">
        <h3 className="text-center mr-2">Select a color: </h3>
        <input type="color" value={hex} onChange = {(e) => {
            setHex(e.target.value);
        }}/>
      </div>
    </div>
  );
}

export default ColorPicker;
