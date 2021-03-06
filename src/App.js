// Components
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Customize from "./components/Customize";
// Router && state
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  const [ingredients, setIngredients] = useState({
    cheese: false,
    olive: false,
    pineapple: false,
    mushroom: false,
    basil: false,
    tomato: false,
  });
  useEffect(() => {
    const data = localStorage.getItem("ingredients");
    console.log(data);
    if (data) {
      setIngredients(JSON.parse(data));
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Customize
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        </Route>
        <Route path="/checkout">
          <Checkout ingredients={ingredients} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
