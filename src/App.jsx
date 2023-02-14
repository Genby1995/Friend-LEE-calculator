import React, { useState } from "react";
import Button from "./componets/button";
import Input from "./componets/Input";

function App() {

  const[autoPrice, setAutoPrice] = useState(50)

  return (
    <div className="container">
      <Button status="disabled" text="Оставить заявку"/>
      <Button status="loading" text="Оставить заявку"/>
      <Button status="" text="Оставить заявку"/>
      <Input max={100} min={0} value={autoPrice} unit={"₽"} changeHandler = {setAutoPrice}/>
    </div>
    
  );
}

export default App;