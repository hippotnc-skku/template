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

<HippoWhiteFrame class="p-5">
	<div class="text-lg font-semibold border-b-2 border-gray-300">게시판의 구성</div>
	<div class="mt-5"></div>

	<ul class="space-y-4 text-gray-800 list-disc list-inside">
		<li>Breadcrumb</li>
		<li>
			Content
			<ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
				<li>목록조회(검색헤더 + 테이블 + 페이지네이션)</li>
				<li>상세조회</li>
				<li>상세조회 + 정보탭</li>
			</ul>
		</li>
	</ul>
</HippoWhiteFrame>

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

<CodeExampleFrame name="이전버튼 있는 경우"></CodeExampleFrame>

<div class="flex justify-between mb-2">
	<Breadcrumb aria-label="Default breadcrumb example" class="flex items-center">
		<BreadcrumbItem href="/#" home>홈</BreadcrumbItem>
		<BreadcrumbItem href="/#">패밀리 목록</BreadcrumbItem>
		<BreadcrumbItem>히포티앤씨</BreadcrumbItem>
	</Breadcrumb>

	<HippoButton color="transparent" size="md" on:click={() => goto('/family')}>이전</HippoButton>
</div>
