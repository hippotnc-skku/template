import { json, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PUBLIC_URL } from '$env/static/public';

export const GET = (async ({ url, params, cookies, fetch }) => {
	const token = cookies.get('access_token');
	const res = await fetch(`${PUBLIC_URL}api/${params.url}${url.search ? url.search : ''}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token
		}
	})
		.then(async (data) => {
			return await data.json();
		})
		.catch((e) => ({
			e,
			coo: token,
			url: `${PUBLIC_URL}api/${params.url}${url.search ? url.search.slice(0, -1) : ''}`
		}));
	if (res.redirected) {
		throw redirect(301, '/');
	}
	return json(res);
}) satisfies RequestHandler;

export async function POST({ request, cookies, params }) {
	const body = await request.json();

	const res = await fetch(`${PUBLIC_URL}api/${params.url}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
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
			'Content-Type': 'application/json',
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
			'Content-Type': 'application/json',
			Authorization: cookies.get('access_token')
		}
	}).then(async (data) => await data.json());
	return json(res);
}
