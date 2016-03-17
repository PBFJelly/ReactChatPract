import axios from 'axios';

export const GET_CHATS = "GET_CHATS";

const ROOT_URL = window.location.origin;

export function getChats() {
	console.log('getting chats');
	const request = axios.get(`${ROOT_URL}/getChats`);

	return {
		type: GET_CHATS,
		payload: request
	}
}