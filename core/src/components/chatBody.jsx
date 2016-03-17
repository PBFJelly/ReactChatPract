import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getChats } from '../actions/index';


class ChatBody extends Component {
	constructor(props) {
		super(props);

	}

	componentWillMount() {
		this.props.getChats();
	}

	renderChats() {
		if(this.props.chats) {
			return (
				this.props.chats.map((chat) => {
					return (
						<div key={chat}>{chat}</div>
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
				<div>Hello</div>
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
