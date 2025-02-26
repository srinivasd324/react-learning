import {useState} from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});

function handleChange(inputName, newValue) {
  setUserInput((prevInput) => {
      const updateValue = {
          ...prevInput,
          [inputName]: +newValue,
      }
      
      return updateValue;
  });
}

  const inpuIsValid = userInput.initialInvestment > 0 && userInput.annualInvestment > 0 && userInput.expectedReturn > 0 && userInput.duration > 0;

  return (
    <>
    <Header />
    <UserInput onHandleChange={handleChange} userInput={userInput} />
    {inpuIsValid ? <Result userInput={userInput} /> : <p className="center">Please enter valid input</p>}
    </>
  )
}

export default App
