import React from "react";
import './App.css'
import PizzaHeader from "./PizzaHeader";
import {Route, Link, Switch } from 'react-router-dom';
import PizzaForm from "./PizzaForm";

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
