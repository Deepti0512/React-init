import React from "react";
import useInput from "../../hooks/use-input";
import "./Form.css";
import "../../UI/Layout/Layout.css";

// Form management using custom hook

const Form2 = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    

    console.log(enteredName);

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "input-box invalid"
    : "input-box";

  const emailInputClasses = emailInputHasError
    ? "input-box invalid"
    : "input-box";

  return (
    <div className="container">
      <h1>Form 2 🪶 Using custom input hook </h1>
      <form className="form-control">
        <div className={nameInputClasses}>
          <label htmlFor="name">Enter Name:</label>
          <input
            type="text"
            value={enteredName}
            id="name"
            name="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        </div>
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
        <div className={emailInputClasses}>
          <label htmlFor="email">Enter Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
        </div>
        {emailInputHasError && (
          <p className="error-text">Enter a valid email.</p>
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

export default Form2;
