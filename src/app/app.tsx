import styles from './app.module.scss';
import { Main } from '../components/Pages/Main/ui/Main';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Main />
    </div>
  );
}

export default App;
