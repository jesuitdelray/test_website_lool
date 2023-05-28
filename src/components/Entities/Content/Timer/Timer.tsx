import { useEffect, useState } from 'react';
import styles from './Timer.module.scss';
import { timerFunc } from 'src/components/Shared/timerFn/timerFunc';

export function Timer() {
  const [time, setTime] = useState(0);
  const { min, sec } = timerFunc(time);
  useEffect(() => {
    const interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.wrapper}>
      <p className={styles.timer}>
        {min.toString().length > 1 ? min : `0${min}`}:
        {sec.toString().length > 1 ? sec : `0${sec}`}
      </p>
    </div>
  );
}
