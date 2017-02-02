export default function user(state={}, action) {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        error: null,
        isAuthenticated: false,
        isLoading: true,
        username: null
      };

    case 'LOGIN_FULFILLED':
      return {
        ...state,
        error: null,
        isAuthenticated: true,
        isLoading: false,
        username: action.payload.data.username
      };

    case 'LOGIN_REJECTED':
      return {
        ...state,
        error: "username or password is incorrect",
        isAuthenticated: false,
        isLoading: false,
        username: null
      };

    default:
      return state;
  }
};