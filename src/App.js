import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { increment, decrement, incrementByAmount } from "./reducers/actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [increamentValue, setIncreamentValue] = useState(1);
  const counter = useSelector((state) => state.counterValue);
  const dispatch = useDispatch();
  console.log(increamentValue);

  const handleInputChange = (e) => {
    setIncreamentValue(e.target.value);
  };

  const increaseCounter = () => {
    dispatch(increment());
  };

  const decreaseCounter = () => {
    dispatch(decrement());
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Redux</h2>
        <p>Counter: {counter}</p>
        <Button text="Increment" onClick={increaseCounter} />
        <input
          type="number"
          placeholder="Increament value"
          onChange={handleInputChange}
        />
        <Button text="Decreament" onClick={decreaseCounter} />
        <Button
          text="Increament by amount"
          onClick={() => {
            dispatch(incrementByAmount(increamentValue));
          }}
        />
      </header>
    </div>
  );
}

export default App;
