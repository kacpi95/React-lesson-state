import styles from './App.module.css';
import { List } from './components/List/List';
import { recipes } from './data/recipes';
import { useState } from 'react';
import CookBook from './components/CookBook/CookBook';
import { RecipeContext } from './context/RecipeContext';

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(1);

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  return (
    <RecipeContext.Provider value={selectedRecipe}>
      <div className={styles.container}>
        <List
          recipes={recipes}
          onSelectRecipe={(id) => setSelectedRecipeId(id)}
        />
        <CookBook />
      </div>
    </RecipeContext.Provider>
  );
}

export default App;
