import { useState, useCallback } from "react";

const useForm = (formObj) => {
  const [form, setForm] = useState(formObj);

  const isInputFieldValid = useCallback(
    (inputField) => {
      for (const rule of inputField.validationRules) {
        if (!rule.validate(inputField.value, form)) {
          inputField.errorMessage = rule.message;
          return false;
        }
      }

      return true;
    },
    [form]
  );



  const onInputChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      const inputObj = { ...form[name] };

      inputObj.value = value;
      const isValidInput = isInputFieldValid(inputObj);

      if (isValidInput && !inputObj.valid) {
        inputObj.valid = true;
      } else if (!isValidInput && inputObj.valid) {
        // if input is not valid and it was previously valid
        // set its valid status to false
        inputObj.valid = false;
      }

      inputObj.touched = true;
      setForm({ ...form, [name]: inputObj });
    },
    [form, isInputFieldValid]
  );

  const isFormValid = useCallback(() => {
    let isValid = true;
    const arr = Object.values(form);

    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].valid) {
        isValid = false;
        break;
      }
    }

    return isValid;
  }, [form]);

  
  const renderFormInputs = () => {
    return Object.values(form).map((inputObj) => {
      const { value, label, errorMessage, valid, renderInput } = inputObj;
      return renderInput(onInputChange, value, valid, errorMessage, label);
    });
  };

  return { renderFormInputs, isFormValid };
};

export default useForm;
