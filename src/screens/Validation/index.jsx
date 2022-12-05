export const validatePwd = (inputtxt) => {
  const exp = /^[a-z]\w{6,14}$/;
  if (inputtxt.length === 0) {
    alert('Password cannot be empty');
  } else {
    if (inputtxt.match(exp)) {
      return true;
    } else {
      alert('Incorrect password format');
      return false;
    }
  }
};

export const validateEmail = (email) => {
  const exp =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.length === 0) {
    alert('Email cannot be empty');
  } else {
    if (email.match(exp)) {
      return true;
    } else {
      alert('Invalid email address');
      return false;
    }
  }
};
export const formValidation = (valueForm) => {
  if (valueForm.length === 0) {
    alert('Field cannot be empty');
    return false;
  }

  return true;
};
