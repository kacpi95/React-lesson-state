import styles from './App.module.css';
import { List } from './components/List/List';
import { recipes } from './data/recipes';
import { useState } from 'react';
import CookBook from './components/CookBook/CookBook';
import { RecipeContext } from './context/RecipeContext';
import { TopBar } from './components/TopBar/TopBar';

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(1);

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  return (
    <>
      <TopBar />
      <div className={styles.container}>
        <RecipeContext.Provider value={selectedRecipe}>
          <List
            selectedRecipe={selectedRecipe}
            recipes={recipes}
            onSelectRecipe={(id) => setSelectedRecipeId(id)}
          />
          <CookBook />
        </RecipeContext.Provider>
      </div>
    </>
  );
}

export default App;
