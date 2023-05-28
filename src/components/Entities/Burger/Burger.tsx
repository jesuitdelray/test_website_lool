import { useState } from 'react';
import styles from './Burger.module.scss';
import links from '../../Shared/data/links';

export function Burger() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.links}>
        {links.map(({ text }) => (
          <p>{text}</p>
        ))}
      </div>
    </div>
  );
}
