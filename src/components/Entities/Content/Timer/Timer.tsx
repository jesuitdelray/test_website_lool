import { useEffect, useState } from 'react';
import styles from './Timer.module.scss';

export function Timer() {
  const [time, setTime] = useState(0);

  const timeInstructions = time % 9 === 0 ? time / 9 : 0;

  useEffect(() => {
    const interval = setInterval(
      () => setTime((prev) => (prev < 9 ? prev + 1 : 0)),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <p className={styles.timer}>
        {timeInstructions}:{timeInstructions > 0 ? 0 : time}
      </p>
    </div>
  );
}
