import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';


class App extends Component {
    state = {
    	persons: [
        	{id:"123", name: "Max", age:"28"},
        	{id:"124", name: "Manu", age:"22"},
        	{id:"125", name: "Stephany", age:"24"}
		],
		showPersons: false
  	}

    switchNameHandler = (newName) => {
        //console.log('Was Clicked!');
		this.setState({
			persons: [
				{name: newName, age:"28"},
				{name: "John", age:"22"},
				{name: "Rhonda", age:"24"}
			]
		})
    }

	nameChangedHandler = (event, id ) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});
		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;

		 
		this.setState({ persons: persons })
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState ({showPersons: !doesShow});
	}

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons: persons})
	}
	
	render() {
		const style = {
			backgroundColor: 'green',
			color: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
		};
		let persons = null;
		if(this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <Person
							click={() =>  this.deletePersonHandler(index) }
							name={person.name} 
							age={person.age}
							key={person.id} 
							changed={(event) => this.nameChangedHandler(event, person.id)} />  
					})}
				</div> 
			);
			style.backgroundColor = "red";
		}
		let classes = [];
		if(this.state.persons.length <= 2) {
			classes.push('red');
		}
		if(this.state.persons.length <= 1) {
			classes.push('bold');
		}


		return (

			<div className="App">
				<h1 className="App-title">HI I'm a React APP!</h1>
				<p className={classes.join(' ')}> Here's Your Person List! </p>
				<button 
					style={style} 
					onClick={this.togglePersonsHandler}>Toggle Persons</button>
				{persons}
			</div>

    	);
 	}
}

export default App;
 