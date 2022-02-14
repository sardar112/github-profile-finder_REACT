import { useEffect, useState, useContext } from 'react';
import Spinner from '../Shared/Spinner';
import User from '../Users/User';
import GithubContext from '../../Context/Github/GithubContext';

function Users() {
  const { users, loading } = useContext(GithubContext);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default Users;
