import styles from './Header.module.scss';
import list from '../../../Shared/data/links';
import burgerSVG from '../../../Shared/assets/svg/burger.svg';
import { useState } from 'react';

export function Header() {
  const [isToggled, setIsToggled] = useState(false);

  function toggleBurger() {
    if (!isToggled) {
      /*  */
    }
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.logo}>TestWWWebsite</p>
      {list.map(({ text }) => (
        <p className={styles.links}>{text}</p>
      ))}
      <img
        className={styles.burgerSVG}
        src={burgerSVG}
        alt=""
        onClick={() => ''}
      />
    </div>
  );
}
