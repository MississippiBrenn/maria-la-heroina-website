import React, { Component, Fragment } from 'react'
import './css/App.css';
import { Header, Banner, Footer } from './components/layouts'
import SearchMenu from './components/SearchMenu.js'
import Matches from './components/searches'

import { categories, matches } from "./store.js";

export default class extends Component {
    state = {
      matches
    }

  getMatchesByCategories() {
    return this.state.matches
  }
  render() {
console.log(this.getMatchesByCategories())
    return (
    <Fragment>
      <Header />
      <Banner />

      <Matches matches={matches}/>
      {/* <SearchMenu /> */}
      <Footer categories={categories}/>
    </Fragment>
    )  
  }
}