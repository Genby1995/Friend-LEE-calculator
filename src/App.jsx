import React, { useState } from "react";
import Button from "./componets/button";
import Input from "./componets/Input";

function App() {
  const [status, setStatus] = useState("ready");
  const [autoPrice, setAutoPrice] = useState(5000000);
  const [initialPayment, setInitialPayment] = useState(1000000);
  const [leaseTerm, setLeaseTerm] = useState(60);

  if (initialPayment > autoPrice*0.6) {
    setInitialPayment(autoPrice*0.6)
  }

  return (
    <div className="container">
      <Button status="disabled" text="Оставить заявку" />
      <Button status="loading" text="Оставить заявку" />
      <Button status="" text="Оставить заявку" />
      <Input
        name="Стоимость авто"
        value={autoPrice}
        max={10000000}
        min={1500000}
        step={10000}
        unit={"₽"}
        changeHandler={setAutoPrice} 
        status={"loading"}/>
      <Input
        name="Первый взнос"
        value={initialPayment}
        max={autoPrice*0.6}
        min={autoPrice*0.1}
        step={10000}
        unit={"%"}
        basis={autoPrice}
        changeHandler={setInitialPayment} 
        status={status}/>
      <Input
        name="Срок лизинга"
        value={leaseTerm}
        max={120}
        min={6}
        step={1}
        unit={"мес."}
        changeHandler={setLeaseTerm} 
        status={status}/>
    </div>

  );
}

export default App;