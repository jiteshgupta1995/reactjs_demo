import React, { Component } from 'react';
import { Form, FormControl, Button, Dropdown, MenuItem } from 'react-bootstrap';
import './App.css';
import partyPopper from '../img/party-popper.jpg';

class AgeTeller extends Component {
	timeSince(date){
		let today = new Date().getTime();
		let other_date = new Date(date).getTime();
		let difference = Math.abs(today - other_date);

		let days = Math.floor(difference / (1000*3600*24));
		let years = Math.floor(days/365);
		days -= years*365;
		let months= Math.floor(days/31);
		days -= months*31;

		return `${years} years, ${months} months, and ${days} days` 
	}
  render() {
      return (
      	<div className="myClass">
        	<h3>{this.props.date}</h3>
        	<img src={partyPopper} alt="party-Popper" className="party" />
        	Congrats on {this.timeSince(this.props.date)}
    	</div>
    );
  }
}

export default AgeTeller;