import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; 

class App extends Component {

  state = {
    persons: [
      { id: 'asfa1', name: 'Amrendra', age: 28 },
      { id: 'vasdf1', name: 'Sahmila', age: 29 },
      { id: 'asdf11', name: 'Adit', age: 26 },
      { id: 'asffv1', name: 'Shivam', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

 
  nameChangeHndler = (event,id) => {
    const personIndex= this.state.persons.findIndex(p=>{
      return p.id ===id;
    })

    const person= {
      ...this.state.persons[personIndex]
    }

    //const person = Object.assign({}, this.state.persons[personIndex])

    person.name= event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons})
    
  }

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons.slice();
    const persons= [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons: persons})
   }
  
  togglePersonsHandler = () => {
    console.log('hitiing');
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
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
    if(this.state.showPersons === true){
      persons =(
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHndler(event, person.id)}/>
          })}       
      </div> 
      );
      
    }

    return (
      <div className="App">
        <h1> Hi, I'am a React application </h1> 
        <button 
          style={style}
        onClick={ this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
     
    );
  }
}

export default App;
