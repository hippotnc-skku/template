<!-- 센터/패밀리 추가 -->
<script>
	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { notifications } from '$lib/components/notification/notifications.js';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';

	import { Modal, Button } from '$lib/components/helpers';
	import {
		HippoWhiteFrame,
		HippoSelect,
		HippoInput,
		HippoButton,
		HippoCheckBox
	} from '$lib/components/hippocomponent';

	import { Breadcrumb, BreadcrumbItem } from '$lib/components/helpers';
</script>

<CodeExampleFrame name="Setup"></CodeExampleFrame>
<iframe
	frameborder="0"
	scrolling="no"
	style="width:100%; height:124px;"
	allow="clipboard-write"
	src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fcru%2Fbreadcrumb%2F_temp.svelte%3Fts%3D4%23L1-L4&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
></iframe>

<CodeExampleFrame name="이전버튼 없는 경우"></CodeExampleFrame>

<div class="flex justify-between mb-2">
	<Breadcrumb aria-label="Default breadcrumb example" class="flex items-center">
		<BreadcrumbItem href="#" home>홈</BreadcrumbItem>
		<BreadcrumbItem>패밀리 목록</BreadcrumbItem>
	</Breadcrumb>

	<HippoButton color="transparent" disabled={true} size="md" class=" text-transparent"
		>'</HippoButton
	>
</div>

<iframe
	frameborder="0"
	scrolling="no"
	style="width:100%; height:250px;"
	allow="clipboard-write"
	src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fcru%2Fbreadcrumb%2F_temp.svelte%3Fts%3D4%23L6-L15&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
></iframe>

<CodeExampleFrame name="이전버튼 있는 경우"></CodeExampleFrame>

<div class="flex justify-between mb-2">
	<Breadcrumb aria-label="Default breadcrumb example" class="flex items-center">
		<BreadcrumbItem href="/#" home>홈</BreadcrumbItem>
		<BreadcrumbItem href="/#">패밀리 목록</BreadcrumbItem>
		<BreadcrumbItem>히포티앤씨</BreadcrumbItem>
	</Breadcrumb>

	<HippoButton color="transparent" size="md" on:click={() => goto('/family')}>이전</HippoButton>
</div>

<iframe
	frameborder="0"
	scrolling="no"
	style="width:100%; height:229px;"
	allow="clipboard-write"
	src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fcru%2Fbreadcrumb%2F_temp.svelte%3Fts%3D4%23L17-L25&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
></iframe>
