import React from "react";
import "../../UI/Layout/Layout.css";
import "./Form.css";

import { useRef, useState, useEffect } from "react";

const Form1 = () => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("Name Input is valid!");
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName("");
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <div className="container">
      <h1>Form 1 🪶 Single Input Form</h1>
      <form className={nameInputClasses}>
        <div className="input-box">
          <label htmlFor="name">Enter Name:</label>
          <input
            type="text"
            value={enteredName}
            id="name"
            ref={nameInputRef}
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
          />
        </div>
        <button type="submit" onClick={formSubmissionHandler}>
          Submit Form
        </button>
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </form>
    </div>
  );
};

export default Form1;

/** 
    We can use the useRef hook, if we only need to read the value of an input and not manipulate it. It is useful for simple forms and input fields.
    For reading every keystoke, and reset the input value after form submission, state is the best option.
*/
