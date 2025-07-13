import { useContext } from 'react';
import styles from './Recipe.module.css';
import { RecipeContext } from '../../context/RecipeContext';

export default function Recipe() {
  const { name, img, time, ingredients, description } =
    useContext(RecipeContext);

  return (
    <>
      <h2>{name}</h2>
      <img src={img} alt='' className={styles.img} />
      <div className={styles.time}>
        <span>Czas przygotowania: {time}</span>
      </div>
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
