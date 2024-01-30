import type { Actions } from './$types';

export const actions = {
	update: async ({ request }) => {
		const data = await request.formData();
		console.log(data);

		return { success: true };
	}
} satisfies Actions;
