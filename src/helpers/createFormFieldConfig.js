import React from "react";
import Input from "../components/Input";

import {
    requiredRule,
    minLengthRule,
    maxLengthRule,
    passwordMatchRule,
    safeCharactersRule
  } from './createValidationRule'

const createFormFieldConfig = (label, name, type, defaultValue = '') => {
    return {
      renderInput: (handleChange, value, isValid, error, key) => {
        return (
          <Input
            key={key}
            name={name}
            type={type}
            label={label}
            isValid={isValid}
            value={value}
            handleChange={handleChange}
            errorMessage={error}
          />
        );
      },
      label,
      value: defaultValue,
      valid: false,
      errorMessage: '',
      touched: false,
    };
  };

  export const signupForm = {
    name: {
        ...createFormFieldConfig('Full Name', 'name', 'text'),
        validationRules: [
            requiredRule('name'),
            minLengthRule('name', 3),
            maxLengthRule('name', 25),
          ],
    },
    email: {
        ...createFormFieldConfig('Email', 'email', 'email'),
        validationRules: [
            requiredRule('email'),
            minLengthRule('email', 10),
            maxLengthRule('email', 25),
            safeCharactersRule('email', '@')
          ],
    },
    password: {
        ...createFormFieldConfig('Password', 'password', 'password'),
        validationRules: [
            requiredRule('password'),
            minLengthRule('password', 8),
            maxLengthRule('password', 20),
          ],
    },
    consfirmPassword: {
        ...createFormFieldConfig('Confirm Password', 'confirmPassword', 'password'),
        validationRules: [passwordMatchRule()],
    },
  };

  export default createFormFieldConfig;