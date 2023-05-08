// Using useReducer instead of useState
import React from "react";
import useInput2 from "../../hooks/use-input2";
import "../../UI/Layout/Layout.css";
import "./Form.css";

const Form3 = () => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput2((value) => value.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput2((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput2((value) => value.includes("@") && value.includes("."));

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;
  const firstNameClasses = firstNameHasError
    ? "input-box invalid"
    : "input-box";
  const LastNameClasses = firstNameHasError
    ? "input-box invalid"
    : "input-box";
  const emailClasses = firstNameHasError
    ? "input-box invalid"
    : "input-box";

  return (
    <div className="container">
        <h1>Form 3 👻 For Practice</h1>
      <form className="form-control" onSubmit={submitHandler}>
        <div className={firstNameClasses}>
          <label htmlFor="firstName">Enter First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        {firstNameHasError && (
          <p className="error-text">FirstName cannot be empty!</p>
        )}
        <div className={LastNameClasses}>
          <label htmlFor="lastName">Enter Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
        {lastNameHasError && (
          <p className="error-text">
            last name cannot be empty!!. Write N/A if you don't have a lastname
          </p>
        )}
        <div className={emailClasses}>
          <label htmlFor="email">Enter Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
        </div>
        {emailHasError && <p className="error-text">Enter valid email.</p>}
        <button type="submit" disabled={!formIsValid}>Submit Form</button>
      </form>
    </div>
  );
};

export default Form3;
