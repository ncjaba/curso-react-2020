import React, {useState} from 'react';


function UseState() {

  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(10);
  const [resultado, setResultado] = useState(15);

  // O <br /> serve para pular uma linha na tela

  const somar = () => {
    const numero1Int = parseInt(numero1)
    const numero2Int = parseInt(numero2)
    setResultado(numero1Int + numero2Int)
  }

  return (
  
    <div >
      Número 1:<br />
      <input type="text" value={numero1} 
             onChange={e => setNumero1(e.target.value)}/><br />

      <br />Número 2:<br />
      <input type="text" value={numero2} 
             onChange={e => setNumero2(e.target.value)}/><br />

      <br /><button onClick={somar}>Somar</button><br />
      <br />Resultado:<br />
      <input type="text" value={resultado} /><br />
    </div>
  );
}

export default UseState;
