import styles from './Header.module.scss';
import { list } from '../list/list';

export function Header() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.logo}>TestWWWebsite</p>
      {list.map((item) => (
        <p className={styles.links}>{item}</p>
      ))}
    </div>
  );
}
