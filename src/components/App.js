import React, { Component } from 'react';
//import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
//import AgeTeller from './AgeTeller.js';

//var Alert = require('react-bootstrap').Alert;

class App extends Component {
  // Age teller function code
  /*constructor(){
    super();
    this.state = {
      newDate: '',
      birthday: '',
      showState: false
    }
  }
  changeBirthDate(){
    this.setState({ birthday: this.state.newDate});
    this.setState({ showState: true});
    console.log(this.state);
  }
  render() {
      return (
        <div className="myClass">
          <Form inline>
            <h2>Input your date of birth</h2>
            <FormControl type="date" onChange={event => this.setState({ newDate: event.target.value})}>
            </FormControl>
            <Button onClick={() => this.changeBirthDate()}>Submit</Button>
          </Form>
          {
          this.state.showState ?
          <div className="fade age-stats">
            <AgeTeller date={this.state.birthday} />
          </div>
          :
          <div></div>
          }
      </div>
    );
  }*/
  render(){
    return (
      <div>Hey</div>
    )
  }
}

export default App;