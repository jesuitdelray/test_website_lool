import styles from './Main.module.scss';
import { Header } from '../../../Entities/Header/ui/Header';
import { Input } from 'src/components/Entities/Content/Input/ui/Input';
import { Timer } from 'src/components/Entities/Content/Timer/Timer';

export function Main() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Input />
      <Timer />
    </div>
  );
}
