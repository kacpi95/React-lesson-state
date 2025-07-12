import styles from './CookBook.module.css';

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
