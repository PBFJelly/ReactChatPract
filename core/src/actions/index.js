import axios from 'axios';

export const GET_CHATS = "GET_CHATS";
export const POST_CHATS = "POST_CHATS";

const ROOT_URL = 'http://localhost:8000'

export function getChats() {
	const request = axios.get(`${ROOT_URL}/getChats`);

	return {
		type: GET_CHATS,
		payload: request
	}
}

export function postMessage(message) {
	let messageObj = {message}
    const request = axios.post(`${ROOT_URL}/getChats`, messageObj);

	return {
		type: POST_CHATS,
		payload: request
	}
}