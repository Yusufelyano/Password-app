
import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("")
  const handlePassword = (e) => {
    setValue(e.target.value)
  }
  const [valueTwo, setValueTwo] = useState("")
  const handlePasswordTwo = (e) => {
    setValueTwo(e.target.value)
  }
  const [result, setResult] = useState("")
  const handleResult = () =>{
    if(value !== valueTwo) {
      return setResult("Пароли не совпадают")
    }
    return setResult(value) 
  }
  

  return (
    <div className="app" >
      <input 
      type="text"
      value={value}
      onChange={handlePassword}
      placeholder="Введите пароль"
      />
      <input 
      type="text"
      value={valueTwo}
      onChange={handlePasswordTwo}
      placeholder="Повторите пароль"
      />
      <button onClick={handleResult}>Результат</button>
      <div>{result}</div>
      
    </div>
  );
}

export default App;
