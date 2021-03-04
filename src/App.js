import React from "react"
import Header from './components/Header'
import Home from './components/Home'
import {Switch, Route} from 'react-router-dom'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/products' component={Products}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/Contact' component={Contact}></Route>
      </Switch>
    </>
  );
}

export default App;
