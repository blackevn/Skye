import axios from "axios";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import useCurrentUser from "./useCurrentUser";
import useUser from "./useUser";

const useFollow = (userId: string) => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { mutate: mutateFetchedUser } = useUser(userId);

  const isFollowing = useMemo(() => {
    const list = currentUser?.followingId || [];

    return list.includes(userId);
  }, [currentUser, userId]);

  const toggleFollow = async () => {
    if (!currentUser) {
      console.log('No user');
      
    }

    try {
      
      let request;

      if (isFollowing) {
        request = () => axios.delete('/api/follow', { data: { userId } });
      } else {
        request = () => axios.post('/api/follow', { userId });
      }

      await request();
      mutateCurrentUser();
      mutateFetchedUser();

      toast.success('Success');
    } catch (error) {
      toast.error('Something went wrong');
    }
  }

  return {
    isFollowing,
    toggleFollow,
  }
}

export default useFollow;