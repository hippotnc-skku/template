<script lang="ts">
	import { page } from '$app/stores';
	import { Pagination } from '$lib/components/helpers';
	import { goto } from '$app/navigation';

	let activeUrl: any = 1;
	let pages = [];

	// 페이지 총 개수
	export let totalCount;
	// 페이지 당 몇개 보여줄지
	export let perPage;

	// 이전(한 페이지)으로 가기
	const previous = () => {
		if (Number(activeUrl) - 5 < 1) return;
		let query = new URLSearchParams($page.url.searchParams.toString());
		if (Number(activeUrl) % 5 === 0) {
			query.set('page', (Math.floor((Number(activeUrl) - 5) / 5) * 5 - 4).toString());
		} else {
			query.set('page', (Math.floor((Number(activeUrl) - 5) / 5) * 5 + 1).toString());
		}
		goto(`${$page.url.pathname}?${query}`, { invalidateAll: true });
	};
	// 다음(한 페이지)으로 가기
	const next = () => {
		if (Math.ceil(Number(activeUrl) / 5) >= Math.ceil(Math.ceil(totalCount / perPage) / 5)) return;
		let query = new URLSearchParams($page.url.searchParams.toString());
		if (Number(activeUrl) % 5 === 0) {
			query.set('page', (Math.floor((Number(activeUrl) + 5) / 5) * 5 - 4).toString());
		} else {
			query.set('page', (Math.floor((Number(activeUrl) + 5) / 5) * 5 + 1).toString());
		}
		goto(`${$page.url.pathname}?${query}`, { invalidateAll: true });
	};

	// 페이지 갱신시에도 항상 5개의 페이지 번호가 있게끔 하기 (ex: 1,2,3,4,5)
	$: {
		activeUrl = $page.url.searchParams.get('page') ?? 1;
		pages = Array(5)
			.fill(0)
			.map((_, i) => Math.floor((Number(activeUrl) - 1) / 5) * 5 + i + 1)
			.filter((p) => p < Math.ceil(totalCount / perPage) + 1)
			.map((p, i) => {
				let queryString = $page.url.search.split('?').slice(1).join('?');
				const hrefParams = new URLSearchParams(queryString);
				hrefParams.set('page', p.toString());
				return {
					name: `${p}`,
					href: `${$page.url.pathname}?${hrefParams.toString()}`,
					active: Number(activeUrl) === p
				};
			});
	}
	// totalCount는 해당 페이지네이션의 개수가 달라질 경우 그에 따라 자동 갱신되게끔 하기
</script>

{#key totalCount}
	<Pagination on:previous={previous} on:next={next} {totalCount} {pages} />
{/key}
