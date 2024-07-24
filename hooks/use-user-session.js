import { useEffect, useState } from 'react';

import { onAuthStateChanged } from '../libs/firebase/auth';

export function useUserSession(InitSessionl) {
  const [userUid, setUserUid] = useState(InitSessionl);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (authUser) => {
      if (authUser) {
        setUserUid(authUser.uid);
      } else {
        setUserUid(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return userUid;
}