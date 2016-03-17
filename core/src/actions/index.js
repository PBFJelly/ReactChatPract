import axios from 'axios';

export const GET_CHATS = "GET_CHATS";

export function getChats() {
	const chats = ['Hello', 'How are you', 'I am fine'];

	return {
		type: GET_CHATS,
		payload: chats
	}
}