import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useLoginUser } from 'context/LoginUser';
import { pagesPath } from 'paths/$path';

export const useLogin = () => {
  const { setLoginUser } = useLoginUser();

  const router = useRouter();

  const login = useCallback((data, _href?: string) => {
    // later change to API call
    // axios('', data)

    setLoginUser({ id: '1', name: '田中太郎' });

    const href = _href ? _href : pagesPath.mypage.$url();
    router.push(href);
  }, []);

  return { login };
};
