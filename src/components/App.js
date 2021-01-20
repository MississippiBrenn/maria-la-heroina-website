import React, { Component, Fragment } from 'react';
import { Header, Banner, Footer } from './layouts';
import Matches from './matches';

import {  matchTo, matchDatabase} from "../store.js";

export default class extends Component {
    state = {
      matchDatabase,
      matchDBEntry:{}
    }

    //accept data as props and pass them down for rendering
    // to be able to return non object for itreating use object entries  
  getMatchByCategory() {
    return Object.entries(this.state.matchDatabase.reduce((matchDatabase, matchEntry) => {
      const { type } = matchEntry

        // spread out elements into a new array 
      matchDatabase[type] = matchDatabase[type] 
      ? [...matchDatabase[type], matchEntry] 
      : [matchEntry]

      return matchDatabase
    }, {})
    )
  }

  handleCategorySelected = category  => {
    this.setState({
      category
    })
  }

   //callback that retrieves previous state(exercises) as well as props
  //asynchronous setState
  // to avoid state being changed during call 
  handleDBEntrySelected = id  => {
    this.setState(({ matchDatabase }) => ({
      matchDBEntry: matchDatabase.find(entry => entry.id === id )
    }))
  }



  render() {
  const matchDatabase = this.getMatchByCategory(),
  {category, matchDBEntry} = this.state 
  
    return (
    <>
      <Header />
      <Banner />
      <Matches 
      matchDBEntry={matchDBEntry}
      category={category}
      matchDatabase={matchDatabase}
      onSelect={this.handleDBEntrySelected}
      />
      {/* <Footer 
      matchTo={matchTo}
      category={category}
      onSelect={this.handleCategorySelected}/>*/}

    </> 
    )  
  }
}