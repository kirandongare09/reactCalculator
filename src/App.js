import {
  useState,
  useRef
} from "react";
import './App.css';

function App() {
  const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);
    const [input, setInput] = useState('');
   
    function plus(e) { 
      e.preventDefault(); 
      if(input !== ''){
        const inputValue = parseFloat(input);
        setResult((result) => result + inputValue);
        inputRef.current.value = 0;
        resultRef.current.innerText = `${result}`;
      }
    }; 
   
    function minus(e) { 
        e.preventDefault(); 
        if(input !== ''){
          const inputValue = parseFloat(input);
          setResult((result) => result - inputValue);
          inputRef.current.value = 0;
        resultRef.current.innerText = `${result}`;
        }
    };
   
    function times(e) { 
      e.preventDefault(); 
      if(input !== ''){
        const inputValue = parseFloat(input);
        setResult((result) => {
          if(result === 0){
            return (1* inputValue);
          }
          return (result * inputValue);
        });
        inputRef.current.value = 0;
        resultRef.current.innerText = `${result}`;
      }
    }; 
   
    function divide(e) { 
      e.preventDefault(); 
      if(input !== ''){
        const inputValue = parseFloat(input);
        setResult((result) => {
          if(result === 0){
            return (inputValue/ 1);
          }
          return (result / inputValue);
        });
        inputRef.current.value = 0;
        resultRef.current.innerText = `${result}`;
      }
    };
   
    function resetInput(e) { 
      setInput('');
      inputRef.current.value = 0;
    }; 
   
    function resetResult(e) { 
        setInput('');
        setResult(0);
        inputRef.current.value = 0;
        resultRef.current.innerText = '0';
    };
  return (
    <div className="App"> 
        <div> 
          <h1>Simplest Working Calculator</h1>
        </div> 
        <form> 
          <p ref={resultRef}> 
            {result} 
          </p> 
          <input
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type a number" 
            onChange={(e)=> setInput(e.target.value)}
          /> 
          <button onClick={plus}>add</button> 
          <button onClick={minus}>subtract</button>
          <button onClick={times}>multiply</button>
          <button onClick={divide}>divide</button>
          <button onClick={resetInput}>resetInput</button>
          <button onClick={resetResult}>resetResult</button>
        </form> 
      </div> 
  );
}

export default App;
