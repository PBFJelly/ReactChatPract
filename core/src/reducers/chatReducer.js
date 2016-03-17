import { GET_CHATS } from '../actions/index.js';

export default function(state = [], action = '') {

	switch(action.type) {
		case(GET_CHATS):
<<<<<<< HEAD
			console.log('chats retrieved', action.payload.data);
=======
>>>>>>> master
			return action.payload.data;
		default:
			return state;
	}

}