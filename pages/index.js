import { useState } from 'react';

export default function Home() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [soma, setSoma] = useState(null);

  const handleSum = (e) => {
    e.preventDefault();
    setSoma(parseFloat(num1) + parseFloat(num2));
  };

  return (
    <div>
      <h1>Calculadora de Soma</h1>
      <form onSubmit={handleSum}>
        <div>
          <label htmlFor="num1">Número 1:</label>
          <input
            type="number"
            id="num1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="num2">Número 2:</label>
          <input
            type="number"
            id="num2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <button type="submit">Somar</button>
      </form>
      {soma !== null && (
        <h2>Resultado: {soma}</h2>
      )}
    </div>
  );
}
