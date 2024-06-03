import { useState } from "react";
import styles from "./App.module.css";
import Buttoncontainer from "./components/ButtonContainer";
import Display from "./components/Display";
function App() {
  let [calVal,setCalVal]  = useState("");
  const onClickButton = (buttonText) => {
    if(buttonText === "C"){
      setCalVal("");
    }else if(buttonText === "="){
      const result = eval(calVal);
      setCalVal(result);
    }else{
      const newDisplayButton = calVal + buttonText;
      setCalVal(newDisplayButton);
    }
};
    return (
      <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <Buttoncontainer onButtonClick ={onClickButton}></Buttoncontainer>
    </div>
    );
}

export default App;
