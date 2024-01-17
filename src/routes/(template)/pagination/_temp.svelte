<script>
	import { HippoPagination } from '$lib/components/hippocomponent';

	let totalCount = 30;
	let perPage = 5;
</script>

<div class="flex justify-center bg-white p-2 rounded-xl">
	<HippoPagination {totalCount} {perPage} />
</div>
