import { useEffect, useState } from 'react';
import styles from './Timer.module.scss';

export function Timer() {
  const [time, setTime] = useState(0);
  // const {min, sec} = time
  const sec = time % 60;
  const min = Math.floor(time / 60);
  useEffect(() => {
    const interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <p className={styles.timer}>
        {min} min {sec} sec
      </p>
    </div>
  );
}
// 256 sec 256 % 60 = sec
