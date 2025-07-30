// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
  const { stack, removeFromBurger } = props;

  return (
    <ul>
      {stack.length <= 0 ? "No ingredients yet. Add some to get started!" : stack.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => removeFromBurger(index)}>X</button>
        </li>
      ))}
    </ul>
  )
};

export default BurgerStack;