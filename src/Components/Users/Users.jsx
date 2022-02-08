import { useEffect, useState } from 'react';
import Spinner from '../Shared/Spinner';
import User from '../Users/User';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);

    const response = await (
      await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      })
    ).json();
    setUsers(response);
    setLoading(false);
    console.log(response);
  };
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
