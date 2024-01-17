export const send = async (url: string, init?: RequestInit) =>
	await fetch(`/api${url}`, init)
		.then(async (res) => await res.json())
		.then((response) => {
			if (response.error) window.location.replace('/');
			return response;
		})
		.catch((e) => console.log(e, init));

export const sendRaw = async (url: string, init?: RequestInit) =>
	await fetch(`/api/form${url}`, init).catch((e) => console.log(e, init));
