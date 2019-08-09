import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: 1, name: 'Cele', age: 26},
      {id: 2, name: 'Cal', age:100},
      {id: 3, name: 'Steph', age: 29}
    ],
    otherState: 'my value uuu',
    showPersons:  false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})

  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    //const person =  Object.assign({}, this.state.persons[personIndex]);
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    
    this.setState({ persons: persons })
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={ () => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi,I'm a React App</h1>
        <p>This is working</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Ce faci nebunule?'))
  }
}

export default App; 
