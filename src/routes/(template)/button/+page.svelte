<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import { HippoButton } from '$lib/components/hippocomponent';
	import { notifications } from '$lib/components/notification/notifications';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';

	function clicked() {
		notifications.success('클릭 됐습니다.', 500);
	}
</script>

<HippoWhiteFrame class="text-center py-5 w-full space-y-1">
	<div class="text-lg font-bold">크기 변환은 padding을 조절하시면 됩니다.</div>
	<div class="text-lg font-bold">
		그 이외에 id나 type를 넣으시면 적용이됩니다.(ex: type = "submit", id="id")
	</div>
</HippoWhiteFrame>

<CodeExampleFrame name="Colors">
	<HippoWhiteFrame class="p-5 flex flex-wrap gap-5">
		<HippoButton class="bg-[#1E2666] text-white px-3 py-2" on:click={clicked}>버튼 1</HippoButton>

		<HippoButton class="bg-[#205CC2] text-white px-3 py-2" on:click={clicked}>버튼 2</HippoButton>
		<HippoButton class="bg-[#DB0F26] text-white px-3 py-2" on:click={clicked}>버튼 3</HippoButton>
		<HippoButton class="bg-[#3561AC] text-white px-3 py-2" on:click={clicked}>버튼 4</HippoButton>
		<HippoButton class="bg-[#FF9114] text-white px-3 py-2" on:click={clicked}>버튼 5</HippoButton>
		<HippoButton class="bg-[#39C261] text-white px-3 py-2" on:click={clicked}>버튼 6</HippoButton>
		<HippoButton class="bg-[#F15D5D] text-white px-3 py-2" on:click={clicked}>버튼 7</HippoButton>
		<HippoButton class="bg-[#F15D5D] text-white px-3 py-2" on:click={clicked}>버튼 8</HippoButton>
		<HippoButton class="bg-[#373838] text-white px-3 py-2" on:click={clicked}>버튼 9</HippoButton>
		<HippoButton class="bg-[#BCBCBC] text-white px-3 py-2" on:click={clicked}>버튼 10</HippoButton>
		<HippoButton class="bg-[#F8F8F8] text-black px-3 py-2" on:click={clicked}>버튼 11</HippoButton>
		<HippoButton class="bg-[#FFFFFF] text-black px-3 py-2" on:click={clicked}>버튼 12</HippoButton>
		<HippoButton class="bg-[#1D58BD] text-white px-3 py-2" on:click={clicked}>버튼 13</HippoButton>
		<HippoButton class="bg-[#4175CE] text-white px-3 py-2" on:click={clicked}>버튼 14</HippoButton>
		<HippoButton class="bg-[#1349A5] text-white px-3 py-2" on:click={clicked}>버튼 15</HippoButton>
		<HippoButton class="bg-[#D3DDEE] text-black px-3 py-2" on:click={clicked}>버튼 16</HippoButton>
		<HippoButton class="bg-[#FCDEDE] text-black px-3 py-2" on:click={clicked}>버튼 17</HippoButton>
		<HippoButton class="bg-[#7B7B7B] text-white px-3 py-2" on:click={clicked}>버튼 18</HippoButton>
		<HippoButton class="bg-[#303030] text-white px-3 py-2" on:click={clicked}>버튼 19</HippoButton>
		<HippoButton class="bg-[#DEDEDE] text-black px-3 py-2" on:click={clicked}>버튼 19</HippoButton>
	</HippoWhiteFrame>
</CodeExampleFrame>
