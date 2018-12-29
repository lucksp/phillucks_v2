import createStore from "redux-zero";

const initialState = {
  loading: true,
  data: []
};

const store = createStore(initialState);

export default store;
