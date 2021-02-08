// Components
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Customize from "./components/Customize";
// Router
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Customize />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
