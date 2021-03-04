import React from "react"
import Header from './components/Header'
import Home from './components/Home'
import {Switch, Route} from 'react-router-dom'
import Products from './components/Products'

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/products' component={Products}></Route>
      </Switch>
    </>
  );
}

export default App;
