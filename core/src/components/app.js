import React from 'react';
import { Component } from 'react';
import ChatBody from './chatBody';
import ChatInput from './chatInput';

export default class App extends Component {
	constructor(props) {
		super(props);
		
	}

  	render() {
    	return (
	      	<div className="page">
	      		<ChatBody />
	      		<ChatInput />
	      	</div>
    	);
  	}
}
