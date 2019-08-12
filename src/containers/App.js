import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');

  }

  state = {
    persons: [
      {id: 1, name: 'Cele', age: 26},
      {id: 2, name: 'Cal', age:100},
      {id: 3, name: 'Steph', age: 29}
    ],
    otherState: 'my value uuu',
    showPersons:  false,
    showCockpit: true,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount ')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate ')
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate ')
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
    
    this.setState((prevState, props) => {
      return {
       persons: persons, changeCounter: prevState.changeCounter + 1 
      };
    });
  };

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />;
    }

    return ( 
        <div className="App">
          <button onClick={ () => {this.setState({showCockpit : false})}}>Remove cockpit</button> 
          { this.state.showCockpit ? <Cockpit 
            title={this.props.appTitle}
            showPersons ={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler} /> : null
            }
         {persons}
        </div>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Ce faci nebunule?'))
  }
}

export default App; 
