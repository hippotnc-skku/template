<script lang="ts">
	import { HippoWhiteFrame, HippoSearchHeader } from '$lib/components/hippocomponent';

	function firstFunction() {
		console.log('첫번째');
	}

	function secondFunction() {
		console.log('두번째');
	}

	function thirdFunction() {
		console.log('세번째');
	}
</script>

<HippoWhiteFrame class="px-8 py-6 mt-10">
	<HippoSearchHeader on:onFirst={firstFunction} />
</HippoWhiteFrame>

<HippoWhiteFrame class="px-8 py-6 mt-10">
	<HippoSearchHeader
		firstName="히포"
		secondName="티앤"
		hasSecondButton={true}
		on:onFirst={firstFunction}
		on:onSecond={secondFunction}
	/>
</HippoWhiteFrame>

<HippoWhiteFrame class="px-8 py-6 mt-10">
	<HippoSearchHeader
		firstName="히포"
		secondName="티앤"
		thirdName="씨이"
		hasSecondButton={true}
		hasThirdButton={true}
		on:onFirst={firstFunction}
		on:onSecond={secondFunction}
		on:onThird={thirdFunction}
	/>
</HippoWhiteFrame>

<HippoWhiteFrame class="px-8 py-6 mt-10">
	<HippoSearchHeader needButtons={false} />
</HippoWhiteFrame>
