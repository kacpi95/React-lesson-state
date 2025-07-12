import styles from './Recipe.module.css';

export default function Recipe({ name, img, ingredients, description }) {
  return (
    <>
      <h2>{name}</h2>
      <img src={img} alt='' className={styles.img} />
      <span>Składniki:</span>
      <ul className={styles.list}>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p className={styles.description}>{description}</p>
    </>
  );
}
