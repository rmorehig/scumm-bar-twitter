import { useEffect } from 'react';
import { useUsers } from 'context/users/UserContext';
import { getFollowingUsers } from 'services/users';
import useAsync from './useAsync';

export default function useFollowing() {
  const { status, data, error, run } = useAsync();
  const { following, setFollowing } = useUsers([]);

  useEffect(() => {
    run(getFollowingUsers());
  }, [run]);

  useEffect(() => {
    if (status === 'success') {
      setFollowing(data?.users);
    }
  }, [data, setFollowing, status]);

  return { loading: status === 'loading', following, error };
}
