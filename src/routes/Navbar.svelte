<script>
	import { dropdownitems } from './dropdown.ts';
	import { page } from '$app/stores';
	import { routes } from './route';

	let routeLink = routes
		.map((r) => {
			if (r.items) {
				let rList = r.items.map((rI) => {
					return { title: rI.title, link: rI.link };
				});

				return rList;
			} else {
				return { title: r.title, link: r.link };
			}
		})
		.flat();
	let subTitle = routeLink.filter((r) => $page.url.pathname.includes(r.link))[0]
		? routeLink.filter((r) => $page.url.pathname.includes(r.link))[0]
		: dropdownitems.filter((r) => $page.url.pathname.includes(r.link))[0];

	$: {
		routeLink = routes
			.map((r) => {
				if (r.items) {
					let rList = r.items.map((rI) => {
						return { title: rI.title, link: rI.link };
					});

					return rList;
				} else {
					return { title: r.title, link: r.link };
				}
			})
			.flat();
		subTitle = routeLink.filter((r) => $page.url.pathname.includes(r.link))[0]
			? routeLink.filter((r) => $page.url.pathname.includes(r.link))[0]
			: dropdownitems.filter((r) => $page.url.pathname.includes(r.link))[0];
	}
</script>

<div class="max-w-[2000px] flex items-center justify-start transition-all shadow-none mx-auto">
	<nav class="mb-5">
		<div class="mb-0 font-bold text-xl w-full flex justify-start">
			{subTitle?.title}
		</div>
	</nav>
</div>
