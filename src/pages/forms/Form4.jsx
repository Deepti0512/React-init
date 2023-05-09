import React from "react";
import { useFormik } from "formik";
import "../../UI/Layout/Layout.css";
import "./Form.css";
import { signUpSchema } from "../../schemas";

//using formik and yup
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Form4 = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className="container">
      <h1>Form 4 🪶 Using Formik and yup</h1>
      <form className="form-control" onSubmit={handleSubmit}>
        <div className="input-box">
          <label htmlFor="name">Enter Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="name"
          />
          {errors.name && touched.name && (
            <div className="error-text">{errors.name}</div>
          )}
        </div>
        <div className="input-box">
          <label htmlFor="email">Enter Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="email"
          />
          {errors.email && touched.email && (
            <div className="error-text">{errors.email}</div>
          )}
        </div>
        <div className="input-box">
          <label htmlFor="password">Enter password:</label>
          <input
            type="text"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="password"
          />
          {errors.password && touched.password && (
            <div className="error-text">{errors.password}</div>
          )}
        </div>
        <div className="input-box">
          <label htmlFor="confirm_password">Confirm password:</label>
          <input
            type="text"
            name="confirm_password"
            id="confirm_password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="confirm password"
          />
          {errors.confirm_password && touched.confirm_password && (
            <div className="error-text">{errors.confirm_password}</div>
          )}
        </div>
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default Form4;
