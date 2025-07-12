import styles from './App.module.css';
import { List } from './components/List/List';
import { recipes } from './data/recipes';

function App() {
  return (
    <div className={styles.container}>
      <List recipes={recipes} />
    </div>
  );
}

export default App;
