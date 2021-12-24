import "./styles.css";
import Calculator from "./components/Calculator";
import ContainerInput from "./components/ContainerInput";
import ContainerResult from "./components/ContainerResult";
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState({
    amount: 0,
    total: 0
  });

  const [errorBill, setErrorBill] = useState(false);
  const [errorPeople, setErrorPeople] = useState(false);

  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);

  const calcular = (bill, people, percentage) => {
    const amount = ((bill * (Number(percentage) / 100)) / people).toFixed(2);
    const total = (bill / people + Number(amount)).toFixed(2);
    setResult({ amount, total });
  };

  const reset = () => {
    document.querySelectorAll("input").forEach((element) => {
      element.value = "";
    });
    if (document.getElementById("bill").classList.contains("row-input-error")) {
      document.getElementById("bill").classList.remove("row-input-error");
      setErrorBill(false);
    }
    if (
      document.getElementById("people").classList.contains("row-input-error")
    ) {
      document.getElementById("people").classList.remove("row-input-error");
      setErrorPeople(false);
    }
    setBill(0);
    setPeople(0);
    setResult({ amount: 0, total: 0 });
  };

  return (
    <div className="App">
      <h1>
        SPLI<span>TTER</span>
      </h1>
      <Calculator>
        <ContainerInput
          calcular={calcular}
          errorBill={errorBill}
          setErrorBill={setErrorBill}
          errorPeople={errorPeople}
          setErrorPeople={setErrorPeople}
          bill={bill}
          setBill={setBill}
          people={people}
          setPeople={setPeople}
        />
        <ContainerResult result={result} reset={reset} />
      </Calculator>
    </div>
  );
}
