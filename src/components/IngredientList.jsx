// src/components/IngredientList.jsx
const IngredientList = (props) => {
  const { ingredients, addToBurger } = props;

  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => addToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  )
};

export default IngredientList;