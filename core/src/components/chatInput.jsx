import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; //creates link to application state and actions
import { connect } from 'react-redux';  //links react and redux
import { postMessage } from '../actions/index';

class ChatInput extends Component {

	constructor(props) {
		super(props);
		this.state = {
			message: ""
		}
		this.handleKeyPress = this.handleKeyPress.bind(this)
		this.onInputChange = this.onInputChange.bind(this)
	}

	handleKeyPress(event) {
		if (event.key === 'Enter') {
			event.preventDefault();
			if (this.state.message) {
				this.props.postMessage(this.state.message);
				this.setState({message: ""});
			} else {
				return;
			}
		}
	}

	onInputChange(event) {
		this.setState({  //before binding setState to component it is pointing at onInputChange
			message: event.target.value
		})
	}


	render() {
		return (
			<div className="chatInput">
				<input onKeyPress={this.handleKeyPress} onChange={this.onInputChange} value={this.state.message} type="text" placeholder="message"/>
			</div>
		);
	}

}

/*function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		postMessage
	}, dispatch);
}*/

export default connect(null, {postMessage})(ChatInput);