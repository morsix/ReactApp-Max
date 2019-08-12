import React, { useEffect } from 'react';

const cockpit = (props) => {

    useEffect( () =>{
        console.log('[Cockpit.js] UseEffect');
        //Http request
        setTimeout( ()=> {
            alert('Save to cloud');
        }, 1000);

        return () =>{
            console.log('[Cockpit.js] Cleanup work')
        }
    }, []);


    useEffect( () => {
        console.log('[Cockpit.js] 2nd useEffect')
        return () => {
            console.log('[Cockpit.js] 2nd Cleanup work ')
        }
    })

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

    if (props.personsLength <= 2) {
        assignedClasses.push('red'); //classes ==['red']
    }

    if (props.personsLength <= 1) {
        assignedClasses.push('bold'); //classes ==['red', 'bold']
    }

    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working</p>
            <button style={style} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(cockpit);