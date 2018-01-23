import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  //===========================================
  //
  //   ####  ######    ###    ######  #####
  //  ##       ##     ## ##     ##    ##
  //   ###     ##    ##   ##    ##    #####
  //     ##    ##    #######    ##    ##
  //  ####     ##    ##   ##    ##    #####
  //
  //===========================================
  state = {
    //
    // ─── PERSONS LIST ────────────────────────────────────────────────
    //
    persons: [
      { id: "123", name: "Max", age: "28" },
      { id: "124", name: "Manu", age: "22" },
      { id: "125", name: "Stephany", age: "24" }
    ],
    // ─────────────────────────────────────────────────────────────────

    //
    // ─── DISPLAY PERSON LIST ─────────────────────────────────────────
    //
    showPersons: false
    // ─────────────────────────────────────────────────────────────────
  };

  //=============================================================================
  //
  //  #####  ##   ##  ##     ##   ####  ######  ##   #####   ##     ##   ####
  //  ##     ##   ##  ####   ##  ##       ##    ##  ##   ##  ####   ##  ##
  //  #####  ##   ##  ##  ## ##  ##       ##    ##  ##   ##  ##  ## ##   ###
  //  ##     ##   ##  ##    ###  ##       ##    ##  ##   ##  ##    ###     ##
  //  ##      #####   ##     ##   ####    ##    ##   #####   ##     ##  ####
  //
  //=============================================================================
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  //=======================================================
  //
  //  #####    #####  ##     ##  ####    #####  #####
  //  ##  ##   ##     ####   ##  ##  ##  ##     ##  ##
  //  #####    #####  ##  ## ##  ##  ##  #####  #####
  //  ##  ##   ##     ##    ###  ##  ##  ##     ##  ##
  //  ##   ##  #####  ##     ##  ####    #####  ##   ##
  //
  //=======================================================
  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          clicked={this.deletePersonHandler}
          persons={this.state.persons}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
		  appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: {classes.App}}, React.createElement('Cockpit', {showPersons: }))
  }
}

export default App;
