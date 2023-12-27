<script>
	import { HippoSearchHeader } from '$lib/components/hippocomponent';
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import HippoInput from '$lib/components/hippocomponent/input/HippoInput.svelte';

	function firstFunction() {
		console.log('첫번째');
	}

	function secondFunction() {
		console.log('두번째');
	}
</script>

<HippoWhiteFrame class="px-5 py-8 flex">
	<HippoSearchHeader
		firstName="생성"
		secondName="이전"
		hasSecondButton={true}
		on:onFirst={firstFunction}
		on:onSecond={secondFunction}
		placeholder="검색..."
		>버튼
	</HippoSearchHeader>
</HippoWhiteFrame>

<HippoWhiteFrame class="mt-10 px-10 py-8 space-y-5">
	<div class="flex items-center gap-x-5">
		<div>제목</div>
		<HippoInput />
	</div>
	<div class="flex items-center gap-x-5">
		<div>제목</div>
		<HippoInput />
	</div>
	<div class="flex items-center gap-x-5">
		<div>제목</div>
		<HippoInput />
	</div>
	<div class="flex items-center gap-x-5">
		<div>제목</div>
		<HippoInput />
	</div>
	<div class="flex items-center gap-x-5">
		<div>제목</div>
		<HippoInput />
	</div>
	<div class="flex items-center gap-x-5">
		<div>제목</div>
		<HippoInput />
	</div>
	<div class="flex items-center gap-x-5">
		<div>제목</div>
		<HippoInput />
	</div>
	<div class="flex items-center gap-x-5">
		<div>제목</div>
		<HippoInput />
	</div>
</HippoWhiteFrame>
