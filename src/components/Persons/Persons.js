import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // shouldComponentUpdate(nextprops, nextState){
  //   console.log('[perons.js] shouldComponentUpdate')
  //   if(nextprops.persons !== this.props.persons){

  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(preProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot'};
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate')
    console.log(snapshot);
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount')
  }

  render() {
    console.log('[persons.js] rendering..');
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}
        isAuth={this.props.isAuthenticated}
      />
    });
  }

}

export default Persons;
