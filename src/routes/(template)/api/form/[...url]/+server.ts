import { json, redirect, text } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PUBLIC_URL } from '$env/static/public';

export const GET = (async ({ url, params, cookies, fetch }) => {
	const token = cookies.get('access_token');
	return await fetch(`${PUBLIC_URL}api/${params.url}${url.search ? url.search : ''}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'multipart/form-data',
			Authorization: token
		}
	}).catch((e) => ({
		e,
		coo: token,
		url: `${PUBLIC_URL}api/${params.url}${url.search ? url.search.slice(0, -1) : ''}`
	}));
}) satisfies RequestHandler;

export async function POST({ request, cookies, params }) {
	const body = await request.json();

	const res = await fetch(`${PUBLIC_URL}api/${params.url}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'multipart/form-data',
			Authorization: cookies.get('access_token')
		},
		body: JSON.stringify(body)
	}).then(async (data) => await data.json());

	return json(res);
}

export async function PUT({ request, cookies, params }) {
	const body = await request.json();
	const res = await fetch(`${PUBLIC_URL}api/${params.url}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'multipart/form-data',
			Authorization: cookies.get('access_token')
		},
		body: JSON.stringify(body)
	}).then(async (data) => await data.json());

	return json(res);
}

export async function DELETE({ params, cookies }) {
	const res = await fetch(`${PUBLIC_URL}api/${params.url}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'multipart/form-data',
			Authorization: cookies.get('access_token')
		}
	}).then(async (data) => await data.json());
	return json(res);
}
