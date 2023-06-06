import styles from './Burger.module.scss';
import links from '../../Shared/data/links';

export function Burger() {
  return (
    <div className={styles.wrapper} onChange={() => ''}>
      <div className={styles.links}>
        {links.map(({ text }) => (
          <p>{text}</p>
        ))}
      </div>
    </div>
  );
}
