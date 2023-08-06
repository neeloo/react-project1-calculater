import React, { useState } from 'react'
import './App.css';

function App() {
  const [ans, setans] = useState(" ");

  const clickhandler = (event) => {
    setans(ans.concat(event.target.value));
  }

  const cleardispaly = () => {
    setans(" ");
  }
  const calculate = () => {
    setans(eval(ans).toString());
  }

  return (

    <div className="calc">
      <input type="text" placeholder=' 0' id='answer' value={ans} />
      <input type="button" value="9" className='button' onClick={clickhandler} />
      <input type="button" value="8" className='button' onClick={clickhandler} />
      <input type="button" value="7" className='button' onClick={clickhandler} />
      <input type="button" value="6" className='button' onClick={clickhandler} />
      <input type="button" value="5" className='button' onClick={clickhandler} />
      <input type="button" value="4" className='button' onClick={clickhandler} />
      <input type="button" value="3" className='button' onClick={clickhandler} />
      <input type="button" value="2" className='button' onClick={clickhandler} />
      <input type="button" value="1" className='button' onClick={clickhandler} />
      <input type="button" value="." className='button' onClick={clickhandler} />
      <input type="button" value="0" className='button' onClick={clickhandler} />
      <input type="button" value="+" className='button' onClick={clickhandler} />
      <input type="button" value="-" className='button' onClick={clickhandler} />
      <input type="button" value="*" className='button' onClick={clickhandler} />
      <input type="button" value="/" className='button' onClick={clickhandler} />
      <input type="button" value="%" className='button' onClick={clickhandler} />
      <input type="button" value="clear" className='button button1' onClick={cleardispaly} />
      <input type="button" value="=" className='button button1' onClick={calculate} />
    </div>

  )
}

export default App