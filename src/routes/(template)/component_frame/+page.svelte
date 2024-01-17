<script>
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import { HippoWhiteFrame } from '$lib/components/hippocomponent';
</script>

<HippoWhiteFrame class="text-center py-5 w-full space-y-1">
	<div class="text-lg font-bold">모든 component의 골격을 나타내는 하얀 배경 프레임입니다.</div>
	<div class="text-lg font-bold">크기 변경은 padding과 width를 조절하여 사용 하실 수 있습니다.</div>
	<div class="text-lg font-bold">
		default class는 bg-white md:rounded-2xl bg-clip-border shadow-soft-sm입니다.
	</div>
</HippoWhiteFrame>

<CodeExampleFrame name="Setup">
	<iframe
		title="setup"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:103px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fcomponent_frame%2F_temp.svelte%3Fts%3D4%23L1-L3&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>

<CodeExampleFrame>
	<HippoWhiteFrame class="text-center py-5 px-4 space-y-1">
		<div class="text-lg font-bold">Default</div>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="">
	<iframe
		title="default"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:103px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fcomponent_frame%2F_temp.svelte%3Fts%3D4%23L5-L7&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>

<CodeExampleFrame name="width 80%인 경우">
	<HippoWhiteFrame class="text-center py-5 w-[80%] mx-auto space-y-1">
		<div class="text-lg font-bold">width: 80%인 경우</div>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="">
	<iframe
		title="80"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:103px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fcomponent_frame%2F_temp.svelte%3Fts%3D4%23L9-L11&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>

<CodeExampleFrame name="padding 40px인 경우">
	<HippoWhiteFrame class="text-center p-10 space-y-1">
		<div class="text-lg font-bold">네이버</div>
		<div class="text-lg font-bold">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laborum dolorem repellat
			distinctio facere autem iste, asperiores at dicta qui est, totam corrupti et perferendis minus
			consequuntur illo suscipit doloribus.
		</div>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="">
	<iframe
		title="padding"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:208px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fcomponent_frame%2F_temp.svelte%3Fts%3D4%23L13-L20&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>
