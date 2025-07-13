import { useContext } from 'react';
import styles from './Recipe.module.css';
import { RecipeContext } from '../../context/RecipeContext';

export default function Recipe() {
  const recipe = useContext(RecipeContext);

  return (
    <>
      <h2>{recipe.name}</h2>
      <img src={recipe.img} alt='' className={styles.img} />
      <span>Składniki:</span>
      <ul className={styles.list}>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p className={styles.description}>{recipe.description}</p>
    </>
  );
}
