const createValidationRule = (ruleName, errorMessage, validateFunction) => {
    return {
        name: ruleName,
        message: errorMessage,
        validate: validateFunction,
      };
};


export function requiredRule (inputName){
    return createValidationRule (
        'required',
        `${inputName} required`,
        (inputValue, formObj) => inputValue.length !== 0
    );
}

export function minLengthRule (inputName, minLength){
    return createValidationRule (
        'minLength',
        `${inputName} has to be at least ${minLength} characters long`,
        (inputValue, formObj) => inputValue.length >= minLength
    );
}

export function maxLengthRule (inputName, maxLength){
    return createValidationRule (
        'maxLength',
        `${inputName} has to be less than ${maxLength} characters long`,
        (inputValue, formObj) => inputValue.length <= maxLength
    );
}

export function safeCharactersRule (inputName, safeChar){
    return createValidationRule (
        'safeCharacter',
        `${inputName} must contain ${safeChar} character`,
        (inputValue, formObj) => inputValue.includes(safeChar) 
    );
}

export function passwordMatchRule() {
    return createValidationRule(
      'passwordMatch',
      `passwords do not match`,
      (inputValue, formObj) => inputValue === formObj.password.value
    );
  }