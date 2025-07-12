import styles from './App.module.css';
import { List } from './components/List/List';
import { recipes } from './data/recipes';
import { useState } from 'react';
import CookBook from './components/CookBook/CookBook';

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(1);

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  const { name, ingredients, description, img } = selectedRecipe;

  return (
    <div className={styles.container}>
      <List
        recipes={recipes}
        onSelectRecipe={(id) => setSelectedRecipeId(id)}
      />
      <CookBook
        name={name}
        ingredients={ingredients}
        description={description}
        img={img}
      />
    </div>
  );
}

export default App;
