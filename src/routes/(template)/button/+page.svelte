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
	<div class="text-lg font-bold">
		color='green' | 'orange' | 'gray' | 'blue' | 'red' | 'trasparent' | 'white'
	</div>
	<div class="text-lg font-bold">size='sm' | 'md' | 'lg' | 'custom'</div>
	<div class="text-lg font-bold">default value : color='gray', size='md'</div>
	<div class="text-lg font-bold">
		그 이외에 id나 type를 넣으시면 적용이됩니다.(ex: type = "submit", id="id")
	</div>
</HippoWhiteFrame>

<CodeExampleFrame name="Color">
	<HippoWhiteFrame class="p-5 flex flex-wrap gap-5">
		<HippoButton color="green" on:click={clicked}>생성/수정</HippoButton>
		<HippoButton color="orange" on:click={clicked}>삭제</HippoButton>
		<HippoButton color="gray" on:click={clicked}>그 외</HippoButton>
		<HippoButton color="blue" on:click={clicked}>파랑</HippoButton>
		<HippoButton color="red" on:click={clicked}>빨강</HippoButton>
		<HippoButton color="transparent" on:click={clicked}>투명</HippoButton>
		<HippoButton color="white" on:click={clicked}>하양</HippoButton>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="Source Code"
	><iframe
		title="button color"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:502px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fbutton%2F_temp.svelte%3Fts%3D4%23L1-L22&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe></CodeExampleFrame
>

<CodeExampleFrame name="Size">
	<HippoWhiteFrame class="p-5 flex flex-wrap gap-5">
		<div>
			<HippoButton color="green" size="sm" on:click={clicked}>Small</HippoButton>
		</div>
		<div>
			<HippoButton color="green" size="md" on:click={clicked}>Medium</HippoButton>
		</div>
		<div>
			<HippoButton color="green" size="lg" on:click={clicked}>Large</HippoButton>
		</div>
		<div>
			<HippoButton color="green" size="custom" class="px-8 py-2" on:click={clicked}
				>Custom</HippoButton
			>
		</div>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="Source Code">
	<iframe
		title="button size"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:145px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fbutton%2F_temp.svelte%3Fts%3D4%23L24-L28&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>
