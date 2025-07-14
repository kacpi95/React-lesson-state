import Recipe from '../Recpie/Recipe';
import Button from '../Button/Button';
import { useContext } from 'react';
import { IsLoggedInStateContext } from '../../context/IsLoggedInStateContext';

export default function Article({ name, ingredients, description, img }) {
  const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInStateContext);

  return (
    <article>
      <Recipe
        name={name}
        ingredients={ingredients}
        description={description}
        img={img}
      />
      {isLoggedIn ? (
        <Button onClick={() => alert('Przepis polubiony!')}>Lubię to!</Button>
      ) : (
        <>
          <div>Zaloguj się, aby polubić przepis:</div>
          <Button onClick={() => setIsLoggedIn(true)}>Zaloguj się</Button>
        </>
      )}
    </article>
  );
}
