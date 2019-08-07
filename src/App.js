import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Cele', age: 26},
      {name: 'Cal', age:100},
      {name: 'Steph', age: 29}
    ],
    otherState: 'my value uuu'
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS this.state.persons[0].name = 'Celestin';
    this.setState({
      persons:[
        {name: newName, age: 26},
        {name: 'Cal', age:100},
        {name: 'Steph', age: 21}
      ] 
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons:[
        {name: 'Celestin', age: 26},
        {name: event.target.value, age:100},
        {name: 'Steph', age: 21}
      ] 
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi,I'm a React App</h1>
        <p>This is working</p>
        <button style={style} onClick={() => this.switchNameHandler('branza')}>Switch Name</button>
        <Person
         name={this.state.persons[0].name}
         age={this.state.persons[0].age} />
        <Person
         name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this, 'Celestin')}
         changed={this.nameChangeHandler}>My hobbies are: Riding Horses</Person>
        <Person 
         name={this.state.persons[2].name}
         age={this.state.persons[2].age} />
      </div>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Ce faci nebunule?'))
  }
}

export default App; 
