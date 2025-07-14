import styles from './App.module.css';
import { List } from './components/List/List';
import { recipes } from './data/recipes';
import { useState } from 'react';
import CookBook from './components/CookBook/CookBook';
import { RecipeContext } from './context/RecipeContext';
import { IsLoggedInStateContext } from './context/IsLoggedInStateContext';
import { TopBar } from './components/TopBar/TopBar';

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  return (
    <IsLoggedInStateContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
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
    </IsLoggedInStateContext.Provider>
  );
}

export default App;
