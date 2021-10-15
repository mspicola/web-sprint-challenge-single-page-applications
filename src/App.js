import React from "react";
import './App.css'
import {Route, Link, Switch } from 'react-router-dom';
import PizzaHeader from "./components/PizzaHeader";
import PizzaForm from "./components/PizzaForm";

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
