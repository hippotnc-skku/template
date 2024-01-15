<script>
	import { HippoInput, HippoWhiteFrame } from '$lib/components/hippocomponent';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
</script>

<HippoWhiteFrame class="text-center py-5 w-full space-y-1">
	<div class="text-lg font-bold">크기 변환은 padding, width을 조절하시면 됩니다.</div>
	<div class="text-lg font-bold">
		그 이외에 id나 type를 넣으시면 적용이됩니다.(ex: type = "submit", id="id")
	</div>
</HippoWhiteFrame>

<CodeExampleFrame>
	<HippoWhiteFrame class="px-4 py-5 w-full">
		<div class="text-lg font-bold">width 100%</div>
		<HippoInput name="totalCount" placeholder="길이가 긴" class="w-full" />

		<div class="text-lg font-bold mt-10">width 80%</div>
		<HippoInput name="totalCount" placeholder="길이가 짧은" class="w-[80%]" />
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="높이 조절">
	<HippoWhiteFrame class="px-4 py-5 w-full">
		<div class="text-lg font-bold">height 50px</div>
		<HippoInput name="totalCount" placeholder="높이가 50px" class="w-full h-[50px]" />

		<div class="text-lg font-bold mt-10">height 80px</div>
		<HippoInput name="totalCount" placeholder="높이가 80px" class="w-full h-20" />
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="인풋 내 패딩 조절">
	<HippoWhiteFrame class="px-4 py-5 w-full">
		<div class="text-lg font-bold">인풋을 클릭해보세요.(px-10 py-10)</div>
		<HippoInput
			name="totalCount"
			placeholder="패딩조절"
			class="w-full h-full"
			padding="px-10 py-10"
		/>

		<div class="text-lg font-bold mt-10">인풋을 클릭해보세요.(px-20 py-8)</div>
		<HippoInput
			name="totalCount"
			placeholder="패딩조절"
			class="w-full h-full"
			padding="px-20 py-8"
		/>
	</HippoWhiteFrame>
</CodeExampleFrame>
