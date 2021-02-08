import { useState } from "react";
import { useHistory } from "react-router-dom";
//Assets
import Pizzaman from "../assets/PizzaMan.png";

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
      <div style={{ flex: 1 }}>
        {success && (
          <div style={{ textAlign: "center" }}>
            <img src={Pizzaman} alt="pizzaman" height="300px" />
            <div style={{ fontFamily: "Open Sans Condensed", fontSize: 35 }}>
              We have received your order, Thank you
            </div>
            <div style={{ fontFamily: "Comfortaa" }}>
              Order #{Math.round(Math.random() * 100000)}
            </div>
            <div style={{ fontFamily: "Indie Flower", fontSize: 20 }}>
              Will be ready in 20-30 min.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Checkout;
