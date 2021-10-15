import React from "react";
// import 'src/App.css'
import {Route, Link, Switch } from 'react-router-dom';
import PizzaHeader from "src/components/PizzaHeader";
import PizzaForm from "src/components/PizzaForm";

const App = () => {
  return (
    <div className="head">
    <PizzaHeader/>
      <Switch>
         <Route path='/Pizza' component={PizzaForm} />
    
    
    
      </Switch>
    </div>
  );
};
export default App;
