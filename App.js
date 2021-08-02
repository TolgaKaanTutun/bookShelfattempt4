import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home'
import SearchPage from './Pages/SearchPage'
import Provider,{ MyContext } from './Provider'


class BooksApp extends React.Component {
 

  render() {
    return (
      <div className="app">
        <Provider>  
        <Switch>
          <Route exact path={"/"} render={()=><MyContext.Consumer>{context=><Home {...context}/>}</MyContext.Consumer>}/>
          <Route exact path={"/search"} render={()=><MyContext.Consumer>{context=><SearchPage {...context}/>}</MyContext.Consumer>}/>
        </Switch>
        </Provider>
      </div>
    )
  }
}

export default BooksApp
