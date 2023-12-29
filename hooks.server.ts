import { PUBLIC_URL } from '$env/static/public';
import { redirect, type Handle } from '@sveltejs/kit';

const cookieOptions = {
	httpOnly: true,
	path: '/',
	secure: false,
	maxAge: 5 * 60 * 60
};

const deleteCookieOptions = {
	httpOnly: true,
	path: '/',
	secure: false,
	maxAge: 0
};

export const handle = (async ({ event, resolve }) => {
	const token = event.cookies.get('access_token');
	const renewal = event.cookies.get('renewal_token');
	if (event.route.id?.startsWith('/(template)')) {
		if (!token) throw redirect(307, '/');

		const isCookie = await event
			.fetch(`${PUBLIC_URL}api/v2/users`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: token
				}
			})
			.then(async (data) => await data.json())
			.catch(console.log);

		// 토큰이 만료됐을 경우 모든 서비스들을 다시 불러온다.
		if (!isCookie?.data) {
			const renew = await event
				.fetch(`${PUBLIC_URL}api/v2/session/renew`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: renewal
					}
				})
				.then(async (data) => await data.json())
				.catch(console.log);
			if (renew?.errors) {
				event.cookies.set('access_token', '', deleteCookieOptions);
				event.cookies.set('renewal_token', '', deleteCookieOptions);
				throw redirect(307, '/');
			} else {
				const access_token = renew.data.access_token;
				const renewal_token = renew.data.renewal_token;

				event.cookies.set('access_token', access_token, cookieOptions);
				event.cookies.set('renewal_token', renewal_token, cookieOptions);
			}
		}
	}

	const response = await resolve(event);

	return response;
}) satisfies Handle;
