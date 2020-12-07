const initialState = {
  photo: null,
  name: null,
  surname: null,
  age: null,
  email: null,
  phone: null,
  typeAddress: null,
  address: null,
  newsletters: null,
  interests: null,
  state: null,
  country: null
};
export const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case "SUBMIT_PHOTO":
      return {
        ...state,
        photo: action.photo,
      };
    case "SUBMIT_USER":
      return {
        ...state,
        ...action.user
      };
    default:
      return state;
  }
};
