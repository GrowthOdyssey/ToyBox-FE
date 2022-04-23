import Image from 'next/image';
import Link from 'next/link';
import { VFC, memo } from 'react';
import { Icon } from 'components/common/Icon';
import { TextInput } from 'components/form/TextInput';
import { pagesPath } from 'paths/$path';
import logo from '../../../public/200x50.png';
import cart from '../../../public/ico_cart.svg';
import login from '../../../public/ico_login.svg';
import search from '../../../public/ico_search.svg';
import user from '../../../public/ico_user.svg';

const isLogin = true;

export const Header: VFC = memo(() => {
  return (
    <header className={'l-header'}>
      <div className={'l-header__inner'}>
        <h1 className={'l-header__logo'}>
          <Link href={'/'}>
            <a>
              <Image src={logo} alt='ToyBox' width={200} height={50} />
            </a>
          </Link>
        </h1>
        <div className={'l-header__search'}>
          <TextInput name={'search'} placeholder={'何をお探しですか'} />
          <button>
            <Icon src={search} alt={'検索'} />
          </button>
        </div>
        <div className={'l-header__menu'}>
          {isLogin ? (
            <Link href={pagesPath.user.login.$url()}>
              <a>
                <Icon src={login} alt={'ログイン'} />
              </a>
            </Link>
          ) : (
            <Link href={pagesPath.mypage.$url()}>
              <a>
                <Icon src={user} alt={'マイページ'} />
              </a>
            </Link>
          )}
          <Link href={pagesPath.cart.$url()}>
            <a>
              <Icon src={cart} alt={'カート'} />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
});
