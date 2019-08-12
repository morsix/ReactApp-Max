import React from 'react';

const cockpit = (props) => {

    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

    const assignedClasses = [];

    if(props.showPersons){
        style.backgroundColor = "red";
    }

    if (props.persons.length <= 2) {
        assignedClasses.push('red'); //classes ==['red']
    }

    if (props.persons.length <= 1) {
        assignedClasses.push('bold'); //classes ==['red', 'bold']
    }

    return (
        <div className="Cockpit">
            <h1>Hi,I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is working</p>
            <button style={style} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;