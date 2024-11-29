import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 1,
  });

  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    if (newValue === "") {
      setUserInput((prevUserInput) => ({
        ...prevUserInput,
        [inputIdentifier]: 0,
      }));
    } else {
      setUserInput((prevUserInput) => ({
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      }));
    }
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please Enter duration greater than 0</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
