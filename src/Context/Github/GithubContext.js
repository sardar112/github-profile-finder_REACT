import { createContext, useState, useReducer } from 'react';
import GithubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false); // using reducer we no longer need use state
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

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

  //instead of using  get user api now we will  call search users
  const searchUsers = async (text) => {
    // setLoading(true);
    setLoading();

    const params = new URLSearchParams({ q: text });
    const { items } = await (
      await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      })
    ).json();
    // setUsers(response);
    // setLoading(false);// using reducer we no longer need use state
    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  //Get User
  const getUser = async (login) => {
    setLoading();

    const res = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    if (res.status === 400) {
      window.location('/notfound');
    } else {
      const userData = await res.json();
      dispatch({
        type: 'GET_USER',
        payload: userData,
      });
    }
  };

  // get Repos
  const getUserRepos = async (login) => {
    setLoading();

    const res = await (
      await fetch(`${GITHUB_URL}/users/${login}/repos`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      })
    ).json();
    dispatch({
      type: 'GET_REPOS',
      payload: res,
    });
  };

  // set Loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  //clear users from  states
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        getUser,
        clearUsers,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
