import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PUBLIC_URL } from '$env/static/public';

const cookieOptions = {
	httpOnly: true,
	path: '/',
	secure: false,
	maxAge: 5 * 60 * 60
};

const cookieOptionsForRemember = {
	httpOnly: true,
	path: '/',
	secure: false,
	maxAge: 2147483647
};

// 로그인 페이지 불렀을 경우
export const load = (async ({ cookies, fetch }) => {
	const token = cookies.get('access_token');

	// 토큰이 유효성 확인하여
	const isCookie = await fetch(`${PUBLIC_URL}api/v2/users`, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: token
		}
	}).then(async (data) => await data.json());

	// 토큰이 유효한 경우 메인 페이지로 이동
	if (isCookie.data) {
		throw redirect(302, '/button');
	}

	// 아이디 기억하기를 할 경우 아이디를 넘김
	if (cookies.get('remember') && JSON.parse(cookies.get('remember'))) {
		const uid = cookies.get('uid');
		return {
			uid: uid
		};
	}
	return {};
}) satisfies PageServerLoad;

export const actions = {
	checkModal: async ({ cookies, request }) => {
		const data = await request.formData();
		const modalInput = data.get('modal')?.toString() ?? '';

		const modalCookie = cookies.get('modal') ?? '';
		const modal = modalCookie.split('-');

		if (!modal.includes(modalInput)) modal.push(modalInput);
		cookies.set('modal', modal.join('-'), cookieOptionsForRemember);
		return true;
	},
	// 로그인을 했을 경우
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		// 아이디와 비밀번호 가져옴
		const uid = data.get('uid');
		const password = data.get('password');
		const rememberID = data.get('rememberID') === 'on';

		try {
			// 로그인 성공할 경우
			const res = await fetch(`${PUBLIC_URL}api/v2/session?t=0`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					user: {
						uid: uid,
						password: password
					}
				})
			});

			// 토큰을 가져와서 쿠키에 저장
			const { access_token, renewal_token } = (await res.json()).data;
			// 매니저의 정보를 가져와서
			const info = await fetch(`${PUBLIC_URL}api/v2/users`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: access_token
				}
			}).then(async (res) => await res.json());

			if (info?.data?.user?.type !== 0)
				return {
					status: '관리자 아이디가 아닙니다'
				};
			cookies.set('access_token', access_token, cookieOptions);
			cookies.set('renewal_token', renewal_token, cookieOptions);
			cookies.set('remember', rememberID ? 'true' : 'false', cookieOptionsForRemember);

			return {
				status: 'success'
			};
		} catch (error) {
			// 로그인 실패할 경우 아이디 다시 넘겨서 아이디 유지
			return {
				id: uid,
				status: '아이디 또는 비밀번호가 틀렸습니다.'
			};
		}
		// 로그인 성고시 메인페이지 이동
	}
} satisfies Actions;
