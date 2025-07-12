import Button from '../Button/Button';
import styles from './List.module.css';

export function List({ recipes }) {
  return (
    <nav className={styles.nav}>
      <span className={styles.title}>Lista przepisów:</span>
      <ul className={styles.list}>
        {recipes.map(({ id }) => (
          <li key={id} className={styles.item}>
            <Button></Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
