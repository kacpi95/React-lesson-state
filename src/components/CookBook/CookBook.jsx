import styles from './CookBook.module.css';
import Article from '../Article/Article';

export default function CookBook({ name, ingredients, description, img }) {
  return (
    <main className={styles.main}>
      <h1>Przepisy na smaczne rzeczy</h1>
      <Article
        name={name}
        ingredients={ingredients}
        description={description}
        img={img}
      />
    </main>
  );
}
