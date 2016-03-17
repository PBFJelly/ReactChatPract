import { GET_CHATS } from '../actions/index.js';

export default function(state = [], action = '') {

	switch(action.type) {
		case(GET_CHATS):
			console.log('chats retrieved', action.payload.data);
			return action.payload.data;
		default:
			return state;
	}

}