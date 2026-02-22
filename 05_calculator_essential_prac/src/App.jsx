import Header from "./util/Components/Header"
import Results from "./util/Components/Results";
import { UserInput } from "./util/Components/UserInput"
import { useState } from "react";

function App() {
      const [userInput,setUserInput]=useState({
            initialInvestment: 10000,
            annualInvestment: 1200,
            expectedReturn: 6,
            duration: 10,
    });

    const inputIsValid=userInput.duration>=1

    function handleChange(inputIdentifier,newValue){
        setUserInput(prevUserInput=>{
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            };

        });

    }

  return (
    <>
    <Header></Header>
    <UserInput userInput={userInput}   onChange={handleChange}></UserInput>
    {!inputIsValid && (<p className="center">Please Enter valid data and duration greater than 0</p>)}
    {inputIsValid && <Results input={userInput}></Results>}
    </>
  )
}

export default App
