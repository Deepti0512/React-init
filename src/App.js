import React from "react";
import Form1 from "./pages/forms/Form1";
import Form4 from "./pages/forms/Form4";
const App = () => {
  return (
    <>
      <Form1></Form1>
      <Form4></Form4>
    </>
  );
};

export default App;
/*
 For testing import and render the form you want to test
 Form1 --> single input form with state and manual validation
 Form2 --> multi-input form handled with custom hook
 Form3 --> multi-input form using custom hook and useReducer (for practice)
 Form4 --> multi-input form handled by formik and validated by yup
*/