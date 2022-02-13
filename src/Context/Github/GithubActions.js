import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});
export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text });
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);
  return { user: user.data, repos: repos.data };
};

//commented code after refectoring axios
/*
 //   const { items } = await (//now we are using axios
  //     await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //       headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       },
  //     })
  //   ).json();
  //   return items;

  //................................................................................................................................
// export const getUser = async (login) => {
//   const res = await fetch(`${GITHUB_URL}/users/${login}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });
//   if (res.status === 400) {
//     window.location('/notfound');
//   } else {
//     const userData = await res.json();
//     return userData;
//   }
// };

// // get Repos
// export const getUserRepos = async (login) => {
//   const params = new URLSearchParams({ sort: 'created', per_page: 10 });

//   const res = await (
//     await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//       headers: {
//         Authorization: `token ${GITHUB_TOKEN}`,
//       },
//     })
//   ).json();
//   return res;
// };


*/
