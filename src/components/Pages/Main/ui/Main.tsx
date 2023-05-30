import styles from './Main.module.scss';
import { Header } from '../../../Entities/Header/ui/Header';
import { Input } from 'src/components/Entities/Content/Input/ui/Input';
import { Timer } from 'src/components/Entities/Content/Timer/Timer';
import { Burger } from 'src/components/Widgets/Burger/Burger';

export function Main() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Burger />
      <Input />
      <Timer />
    </div>
  );
}
