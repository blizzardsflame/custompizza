import { useState } from "react";
import { useHistory } from "react-router-dom";

const Checkout = ({ ingredients }) => {
  let history = useHistory();
  const [success, setSuccess] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>Ingredients</h1>
        {Object.keys(ingredients).map((ingredient) => {
          return ingredients[ingredient] && <p>{ingredient}</p>;
        })}
        <button onClick={() => setSuccess(true)}>Confirm</button>
        <button onClick={() => history.push("/")}>Back</button>
      </div>
      <div>success</div>
    </div>
  );
};
export default Checkout;
