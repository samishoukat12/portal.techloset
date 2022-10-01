import { useReactiveVar } from "@apollo/client";
import { useState } from "react";
import { emailVal } from "../../lib/reactivities/reactiveVarables";

export function useFormModal() {
    const [emailError, setEmailError] = useState("")
    const [focus, setFocus] = useState(false)
    const useEmailVal= useReactiveVar(emailVal)
     const validEmail = (email) => {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
      };
      const emailHandler = (e) =>{
        if(!validEmail(e.target.value)){
            setEmailError("Email is not valid")
        }else{
            setEmailError(null)
            emailVal(e.target.value)
        }
        
      }
      
      console.log("Vsalue in reactive var", useEmailVal);
      console.log(focus)

      return[{
        emailHandler,emailError, focus, setFocus
      }]
}
