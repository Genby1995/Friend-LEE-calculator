import React, { useState } from "react";
import Button from "./componets/button";
import Input from "./componets/Input";

function App() {
  const [status, setStatus] = useState("ready");
  const [autoPrice, setAutoPrice] = useState(3000000);
  const [initialPayment, setInitialPayment] = useState(420000);
  const [leaseTerm, setLeaseTerm] = useState(60);

  const mounthPay = (+autoPrice - +initialPayment) * 0.05 * (1 + 0.05) ** (+leaseTerm) / ((1 + 0.05) ** (+leaseTerm) - 1);
  const signSum = +initialPayment + (+leaseTerm * +mounthPay);

  if (+initialPayment > +autoPrice * 0.6) {
    setInitialPayment(+autoPrice * 0.6)
  }

  return (
    <div className="main-wrapper">
      <div className="main-container">
        <h1 className="title">Рассчитайте стоимость автомобиля в лизинг</h1>
        <div className="sliders-container">

          <div className="slider-wrapper">
            <p className="annotation">Стоимость автомобиля</p>
            <Input
              name="Стоимость авто"
              value={autoPrice}
              max={10000000}
              min={1500000}
              step={10000}
              unit={"₽"}
              changeHandler={setAutoPrice}
              status={status} />
          </div>

          <div className="slider-wrapper" style={{ gridArea: "slider2" }}>
            <p className="annotation">Первоначальный взнос</p>
            <Input
              name="Первый взнос"
              value={initialPayment}
              max={autoPrice * 0.6}
              min={autoPrice * 0.1}
              step={10000}
              unit={"%"}
              basis={autoPrice}
              changeHandler={setInitialPayment}
              status={status} />
          </div>

          <div className="slider-wrapper" >
            <p className="annotation">Срок лизинга</p>
            <Input
              name="Срок лизинга"
              value={leaseTerm}
              max={120}
              min={6}
              step={1}
              unit={"мес."}
              changeHandler={setLeaseTerm}
              status={status} />
          </div>
        </div>

        <div className="calcs-container">
          <div className="calc-wrapper">
            <p className="annotation">Сумма договора лизинга</p>
            <b className="calc">{Math.round(signSum).toLocaleString('ru-Ru') + " ₽"}</b>

          </div>
          <div className="calc-wrapper">
            <p className="annotation">Ежемесячный платеж от</p>
            <b className="calc">{Math.round(mounthPay).toLocaleString('ru-Ru') + " ₽"}</b>
          </div>
          <div className="calc-wrapper">

            <Button status="disabled" text="Оставить заявку" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;