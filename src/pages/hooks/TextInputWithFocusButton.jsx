// import { useRef } from 'react';

// const TextInputWithFocusButton = () => {
//   // Step 1: Create a ref
//   const inputRef = useRef(null);

//   // Step 2: Define a function that sets focus on the input element
//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       {/* Step 3: Attach the ref to the input element */}
//       <input type="text" ref={inputRef} />
//       {/* Step 4: Use the ref in an event handler */}
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// };

// export default TextInputWithFocusButton;


import { useState , useEffect , useRef } from "react"

export default function TextInputWithFocusButton() {
  const [inputvalue ,setinputvalue] = useState("");
  const prevvalue = useRef("");
   useEffect(() =>{
    prevvalue.current = inputvalue;

   }, [inputvalue]);
  return (
    <div> 
      <input type="text" value={inputvalue} onChange={(e) => setinputvalue(e.target.value)}/>
      <h1>Current : {inputvalue}</h1>
      <h1>Previous: {prevvalue.current}</h1>
    </div>
  )
}
