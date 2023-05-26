import { useEffect, useState } from 'react';
import styles from './Input.module.scss';

export function Input() {
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState<string>([]);
  const [storedName, setStoredName] = useState(localStorage.getItem('name'));
  const [isToggle, setIsToggle] = useState(false);

  function saveInputButton() {
    if (!isToggle) {
      setName((prev) => (prev ? `${prev} | ${inputValue}` : prev));
      localStorage.setItem('name', name);
      setIsToggle(true);
    }
  }

  function showInputButton() {
    if (inputValue === 'admin') {
      setIsToggle(true);
    }
    if (isToggle) {
      setStoredName((prev) => (prev ? `${prev} | ${inputValue}` : inputValue));
      setIsToggle(false);
    }
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.textBlock}>
          <p>Welcome to my training page</p>
        </div>
        <input
          className={styles.firstInput}
          type="text"
          id="firstInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <label className={styles.firstInputLabel} htmlFor="firstInput">
          {inputValue}
          {name}
        </label>
        <button className={styles.firstSaveButton} onClick={saveInputButton}>
          Сохранить данные
        </button>
        <button className={styles.firstShowButton} onClick={showInputButton}>
          Показать сохраненные данные
        </button>
        <div className={styles.dataBlock}>
          <p>Имена : </p>
          {storedName}
        </div>
      </div>
    </div>
  );
}
