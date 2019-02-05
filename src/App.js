import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'; 

class App extends Component {

  state = {
    persons: [
      {name: 'Amrendra', age: 28},
      { name : 'sahmila' , age: 22},
      { name: 'Aditi' , age: 12}
    ]
  }

  switchNameHandler = (newName) => {
   //Donot this work this.state.persons[0].name='Kumar';
   this.setState({
   persons: [
    {name: newName, age: 32},
    { name : 'sahmila' , age: 22},
    { name: 'Aditi' , age: 12}
  ]
  })
  }

  nameChangeHndler = (event) => {
    this.setState({
      persons: [
       {name: 'textName', age: 32},
       { name : event.target.value , age: 22},
       { name: 'Aditi' , age: 12}
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
        <h1> Hi, I'am a React application </h1> 
        <button 
          style={style}
        onClick={() => this.switchNameHandler('amrendra..') }>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        click={this.switchNameHandler.bind(this, 'Amrendra!!!')}
        changed={this.nameChangeHndler}> 
        My Hobbies is: Racing </Person>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} />
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
        
      </div>
     
    );
  }
}

export default App;
