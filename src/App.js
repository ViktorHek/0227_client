import React from "react"
import Header from './components/Header'
import Home from './components/Home'
import {Switch, Route} from 'react-router-dom'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import LoginForm from './components/LoginForm'
import { useSelector } from 'react-redux'
import CreateProductForm from './components/CreateProductForm'

function App() {
  const authentication = useSelector((state) => state.authentication)

  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/products' component={Products}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/Contact' component={Contact}></Route>
      </Switch>
      {authentication === true ? <CreateProductForm /> : <LoginForm />}
    </>
  );
}

export default App;