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
</script>

<HippoWhiteFrame class="p-5">
	<div class="text-lg font-semibold border-b-2 border-gray-300">Layout</div>

	<ul class="my-5 space-y-4 text-gray-800 list-disc list-inside">
		<li>게시판의 Layout은 아래 source code 같이 통일하여야 한다.</li>
		<li>
			게시판의 max width는 1600px로 하여 좌측에 표시되는 side navigation bar와 합쳐 보았을 때
			1920x1080 화면에서 가장 적절히 보이도록 한다.
		</li>
	</ul>

	<iframe
		frameborder="0"
		scrolling="no"
		style="width:100%; height:145px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fcru%2Finfo%2F%252Blayout.svelte&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</HippoWhiteFrame>

<div class="my-2"></div>

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
