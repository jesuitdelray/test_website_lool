import styles from './Content.module.scss';

export function Content() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.textBlock}>
          <p>Welcome to my test page</p>
          <p>Here i am training with some things about React</p>
        </div>
      </div>
      <input type="text" />
    </div>
  );
}
