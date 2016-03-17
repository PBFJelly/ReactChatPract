import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getChats } from '../actions/index';


class ChatBody extends Component {
	constructor(props) {
		super(props);
	this.getChats = this.getChats.bind(this)
	}

	getChats() {
		this.props.getChats();
	}
	
	componentDidMount() {
		setInterval(function() {
			this.getChats()}.bind(this), 1000)
	}
	
	renderChats() {
		if(this.props.chats) {
			return (
				this.props.chats.map((chat) => {
					return (
						<div key={chat._id}>{chat.message}</div>
					);
				})
			);
		} else {
			return (
				<div></div>
			);
		}
		
	}

	render() {
		return (
			<div className="chatBody">
				{this.renderChats()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		chats: state.chats	
	}
}

export default connect(mapStateToProps, { getChats })(ChatBody);
