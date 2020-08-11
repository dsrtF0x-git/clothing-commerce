import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";

const Hatspage = () => {
  return <div>HATS PAGE</div>;
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* <Homepage /> */}
        <Route exact path="/hats" component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
