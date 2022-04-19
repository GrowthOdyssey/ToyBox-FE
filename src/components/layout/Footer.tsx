import Link from 'next/link';
import { VFC, memo } from 'react';

export const Footer: VFC = memo(() => {
  return (
    <footer className={'l-footer'}>
      <div className={'l-footer__inner'}>
        <ul className={'l-footer__links'}>
          <li>
            <Link href={'#'}>よくある質問</Link>
          </li>
          <li>
            <Link href={'#'}>お問い合わせ</Link>
          </li>
          <li>
            <Link href={'#'}>プライバシーポリシー</Link>
          </li>
          <li>
            <Link href={'#'}>会員規約</Link>
          </li>
          <li>
            <Link href={'#'}>採用情報</Link>
          </li>
          <li>
            <Link href={'#'}>会社情報</Link>
          </li>
        </ul>
        <p className={'l-footer__copyright'}>© 2022 Growth Odyssey. All Rights Resarved.</p>
      </div>
    </footer>
  );
});
