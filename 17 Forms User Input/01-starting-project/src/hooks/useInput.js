import { useState } from "react";
export function useInput(defaultValue, validFn){
    const [enteredValue, setEneteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const isValidValue = validFn(enteredValue);

    function handleInputChange(event) {
        setEneteredValue(event.target.value);
        setDidEdit(false);
      }
    
      function handleInputBlur() {
        setDidEdit(true);
      }

      return {
        value: enteredValue,
        didEdit,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !isValidValue
      }
}