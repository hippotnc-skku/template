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

<CodeExampleFrame name="SetUp">
	<iframe
		title="setup"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:103px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Finput%2F_temp.svelte%3Fts%3D4%23L1-L3&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>

<CodeExampleFrame>
	<HippoWhiteFrame class="px-4 py-5 w-full">
		<div class="text-lg font-bold">width 100%</div>
		<HippoInput name="totalCount" placeholder="길이가 긴" class="w-full" />

		<div class="text-lg font-bold mt-10">width 80%</div>
		<HippoInput name="totalCount" placeholder="길이가 짧은" class="w-[80%]" />
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame>
	<iframe
		title="default"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:103px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Finput%2F_temp.svelte%3Fts%3D4%23L5-L7&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>

<CodeExampleFrame name="높이 조절">
	<HippoWhiteFrame class="px-4 py-5 w-full">
		<div class="text-lg font-bold">height 50px</div>
		<HippoInput name="totalCount" placeholder="높이가 50px" class="w-full h-[50px]" />

		<div class="text-lg font-bold mt-10">height 80px</div>
		<HippoInput name="totalCount" placeholder="높이가 80px" class="w-full h-20" />
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="높이 조절">
	<iframe
		title="height"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:103px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Finput%2F_temp.svelte%3Fts%3D4%23L9-L11&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
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

<CodeExampleFrame name="인풋 내 패딩 조절">
	<iframe
		title="padding"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:103px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Finput%2F_temp.svelte%3Fts%3D4%23L13-L15&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>
