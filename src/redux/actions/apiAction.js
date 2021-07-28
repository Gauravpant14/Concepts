import axios from "axios";
export const fetchUsersRequest = () => {
  return {
    type: "FETCH_USERS_REQUEST",
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: users,
  };
};

export const fetchUsersPaginationSuccess = (users) => {
  return {
    type: "FETCH_USERS_PAGINATION_SUCCESS",
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: "FETCH_USERS_FAILURE",
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .post("http://192.168.1.10:80/api/products", {
        skip: 0,
        limit: 10,
        category: "",
        size: "",
        selection: "",
        vintage: "",
        min_score: "",
        max_score: "",
        min_price: "",
        max_price: "",
      })
      .then((response) => {
        console.log(response.data.result);
        const users = response.data.result;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error));
        const errMsg = error.message;
        dispatch(fetchUsersFailure(errMsg));
      });
  };
};

export const loadMoreUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .post("http://192.168.1.10:80/api/products", {
        skip: 10,
        limit: 10,
        category: "",
        size: "",
        selection: "",
        vintage: "",
        min_score: "",
        max_score: "",
        min_price: "",
        max_price: "",
      })
      .then((response) => {
        console.log(response.data.result);
        const users = response.data.result;
        dispatch(fetchUsersPaginationSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error));
        const errMsg = error.message;
        dispatch(fetchUsersFailure(errMsg));
      });
  };
};
