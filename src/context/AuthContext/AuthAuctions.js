export const loginStart = () => ({
  type: 'LOGIN_START',
});

export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const loginFailure = (errMessage) => ({
  type: 'LOGIN_FAILURE',
  payload: errMessage,
});

export const logout = () => ({
  type: 'LOGOUT',
});
