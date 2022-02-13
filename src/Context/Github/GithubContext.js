import { createContext, useState, useReducer } from 'react';
import GithubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

//commented code after refectoring
/*
// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false); // using reducer we no longer need use state
//we don't need the get users api now we are using the search api'
  // const fetchUsers = async () => {
  //   // setLoading(true);
  //   setLoading();

  //   const response = await (
  //     await fetch(`${GITHUB_URL}/users`, {
  //       headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       },
  //     })
  //   ).json();
  //   // setUsers(response);
  //   // setLoading(false);// using reducer we no longer need use state
  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: response,
  //   });
  // };
  //Search .... We are gonna call this function from Actions
  //instead of using  get user api now we will  call search users
  // const searchUsers = async (text) => {
  //   // setLoading(true);
  //   setLoading();

  //   const params = new URLSearchParams({ q: text });
  //   const { items } = await (
  //     await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //       headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       },
  //     })
  //   ).json();
  //   // setUsers(response);
  //   // setLoading(false);// using reducer we no longer need use state
  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: items,
  //   });
  // };

  //Get User .... We are gonna call this function from Actions
  // const getUser = async (login) => {
  //   setLoading();

  //   const res = await fetch(`${GITHUB_URL}/users/${login}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   if (res.status === 400) {
  //     window.location('/notfound');
  //   } else {
  //     const userData = await res.json();
  //     dispatch({
  //       type: 'GET_USER',
  //       payload: userData,
  //     });
  //   }
  // };

  //Search .... We are gonna call this function from Actions
  // get Repos
  // const getUserRepos = async (login) => {
  //   setLoading();

  //   const res = await (
  //     await fetch(`${GITHUB_URL}/users/${login}/repos`, {
  //       headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       },
  //     })
  //   ).json();
  //   dispatch({
  //     type: 'GET_REPOS',
  //     payload: res,
  //   });
  // };

  // // set Loading
  // const setLoading = () => dispatch({ type: 'SET_LOADING' });//we dont need anymore bcx of actions

  // //clear users from  states
  // const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });//we dont need anymore bcx of actions

    // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        // searchUsers,
        // getUser,
        // getUserRepos,
        // clearUsers,
*/
