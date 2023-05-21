import styles from './Main.module.scss';
import { Header } from '../../../Entities/Header/ui/Header';
import { Content } from 'src/components/Entities/Content/ui/Content';

export function Main() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Content />
    </div>
  );
}
