import React, { Component, Fragment } from 'react'
import { Header, Banner, Footer } from './layouts'
import SearchMenu from './SearchMenu.js'
import Exercises from './exercises'
import Matches from './matches'

import {  matchTo, matchDatabase, muscles, exercises } from "../store.js";


export default class extends Component {
    state = {
      exercises,
      exercise:{}, 
      matchDatabase,
      matchDBEntry:{}
    }

    //accept data as props and pass them down for rendering
    // to be able to return non object for itreating use object entries  
  getExercisesByMuscles() {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise

        // spread out elements into a new array 
      exercises[muscles] = exercises[muscles] 
      ? [...exercises[muscles], exercise] 
      : [exercise]

      return exercises
    }, {})
    )
  }

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
  handleExerciseSelected = id  => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id )
    }))
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
  // const exercises = this.getExercisesByMuscles(),
  // { category, exercise } = this.state

  const matchDatabase = this.getMatchByCategory(),
  {category, matchDBEntry} = this.state 
  
    return (
    <Fragment>
      <Header />
      {/* <Banner /> */}
      {/* <Exercises
      exercise = {exercise}
      category={category} 
      exercises={exercises}
      onSelect={this.handleExerciseSelected}
      /> */}
      {/* <SearchMenu /> */}
      <Matches 
      matchDBEntry={matchDBEntry}
      category={category}
      matchDatabase={matchDatabase}
      onSelect={this.handleDBEntrySelected}
      />
      <Footer 
      matchTo={matchTo}
      category={category}
      muscles={muscles}
      onSelect={this.handleCategorySelected}/>
    </Fragment>
    )  
  }
}