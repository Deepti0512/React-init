import React from "react";
import { useState } from "react";
import "../../UI/Layout/Layout.css";
import "./Form.css";

const Form1 = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredNameTouched && enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!formIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "input-box invalid"
    : "input-box";

  return (
    <div className="container">
      <h1>Form 1 🪶 Single Input Form</h1>
      <form className="form-control">
        <div className={nameInputClasses}>
          <label htmlFor="name">Enter Name:</label>
          <input
            type="text"
            value={enteredName}
            id="name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
          />
        </div>
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
        <button
          type="submit"
          onClick={formSubmissionHandler}
          disabled={!formIsValid}
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default Form1;

/** 
    We can use the useRef hook, if we only need to read the value of an input and not manipulate it. It is useful for simple forms and input fields.
    For reading every keystoke, and reset the input value after form submission, state is the best option.
*/
