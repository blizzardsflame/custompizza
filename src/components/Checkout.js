import { useState } from "react";
import { useHistory } from "react-router-dom";
//Assets
import Pizzaman from "../images/PizzaMan.png";
//Animation
import { motion } from "framer-motion";

const Checkout = ({ ingredients }) => {
  let history = useHistory();
  const [success, setSuccess] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, textAlign: "center" }}>
        <h1>Ingredients</h1>
        {Object.keys(ingredients).map((ingredient) => {
          return (
            ingredients[ingredient] && (
              <p style={{ fontSize: "25px" }}>
                {ingredient[0].toUpperCase()}
                {ingredient.substr(1)}
              </p>
            )
          );
        })}
        <button
          className="proceedToCheckout"
          style={{ marginRight: "5px" }}
          onClick={() => setSuccess(true)}
        >
          Confirm
        </button>
        <button className="proceedToCheckout" onClick={() => history.push("/")}>
          Back
        </button>
      </div>
      <div style={{ flex: 1 }}>
        {success && (
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{
              scale: 1,
            }}
            transition={{ duration: 1 }}
            style={{ textAlign: "center" }}
          >
            <img src={Pizzaman} alt="pizzaman" height="300px" />
            <div style={{ fontFamily: "Dancing Script", fontSize: 40 }}>
              We have received your order, Thank you
            </div>
            <div style={{ fontFamily: "Great Vibes", fontSize: 25 }}>
              Order #{Math.round(Math.random() * 100000)}
            </div>
            <div style={{ fontFamily: "Dancing Script", fontSize: 25 }}>
              Will be ready in 20-30 min.
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default Checkout;
