<script lang="ts">
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import { HippoWhiteFrame, HippoSearchHeader } from '$lib/components/hippocomponent';
	import { notifications } from '$lib/components/notification/notifications';

	function firstFunction() {
		notifications.success('첫번째', 500);
	}

	function secondFunction() {
		notifications.success('두번째', 500);
	}

	function thirdFunction() {
		notifications.success('세번째', 500);
	}
</script>

<HippoWhiteFrame class="text-center py-5 px-10 w-full space-y-2">
	<div class="text-lg font-bold">
		needButtons으로 우측의 button group의 존재유무를 정할 수 있습니다.
	</div>
	<div class="text-start">
		<div class="mb-4 mt-5 font-bold">Default값</div>
		<div class="text-sm space-y-1">
			<div>needButtons: true (버튼 그룹 유무)</div>
			<div>firstName: "첫번째" (버튼 유무)</div>
			<div>secondName: "두번째" (버튼 유무)</div>
			<div>thirdName: "세번째" (버튼 유무)</div>
			<div>hasSecondButton: false (두번째 버튼 유무)</div>
			<div>hasThirdButton: false (세번째 버튼 유무)</div>
			<div>onFirst: function (첫번째 버튼 이벤트 함수설정)</div>
			<div>onSecond: function (두번째 버튼 이벤트 함수설정)</div>
			<div>onThird: function (세번째 버튼 이벤트 함수설정)</div>
			<div>secondColor: "bg-[#303030] text-white" (두번째 버튼 색선정)</div>
			<div>thirdColor: "bg-[#303030] text-white" (세번째 버튼 색선정)</div>
			<div>placeholder: "검색..." (placeholder 선정)</div>
		</div>
	</div>
</HippoWhiteFrame>

<CodeExampleFrame name="Setup">
	<iframe
		title="setup"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:355px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fsearchheader%2F_temp.svelte%3Fts%3D4%23L1-L15&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>

<CodeExampleFrame>
	<HippoWhiteFrame class="px-8 py-6 mt-10">
		<HippoSearchHeader on:onFirst={firstFunction} />
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame>
	<iframe
		title="default"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:103px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fsearchheader%2F_temp.svelte%3Fts%3D4%23L17-L19&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>

<CodeExampleFrame name="버튼 2개일 경우">
	<HippoWhiteFrame class="px-8 py-6 mt-10">
		<HippoSearchHeader
			firstName="히포"
			secondName="티앤"
			hasSecondButton={true}
			on:onFirst={firstFunction}
			on:onSecond={secondFunction}
		/>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="버튼 2개일 경우">
	<iframe
		title="twobutton"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:229px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fsearchheader%2F_temp.svelte%3Fts%3D4%23L21-L29&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>

<CodeExampleFrame name="버튼 3개일 경우">
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
</CodeExampleFrame>

<CodeExampleFrame name="버튼 3개일 경우">
	<iframe
		title="threebutton"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:292px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fsearchheader%2F_temp.svelte%3Fts%3D4%23L31-L42&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>

<CodeExampleFrame name="버튼이 없는 경우">
	<HippoWhiteFrame class="px-8 py-6 mt-10">
		<HippoSearchHeader needButtons={false} />
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="버튼이 없는 경우">
	<iframe
		title="nobutton"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:103px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fsearchheader%2F_temp.svelte%3Fts%3D4%23L44-L46&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>
