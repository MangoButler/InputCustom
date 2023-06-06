import React from "react";
import useForm from "../hooks/use-form";
import { signupForm } from "../helpers/createFormFieldConfig";

import './SigninForm.css';
const SigninForm = () => {
    const { renderFormInputs, isFormValid } = useForm(signupForm);

    return (
        <form className="signupForm">
        <h1>Sign Up</h1>
  
        {renderFormInputs()}
  
        <button type="submit" disabled = {!isFormValid}>Submit</button>
      </form>
    );
};

export default SigninForm;