import testImage from "./images/test-img.png";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, Hovers } from "./pages";
import { Cursor, Menu } from "./components";
// const cursor = import("./assets/js/index");

function App() {
  return (
    <>
      {/* <Cursor /> */}
      <Menu />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hovers" component={Hovers} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
