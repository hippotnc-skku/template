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

<CodeExampleFrame>
	<HippoWhiteFrame class="text-center py-5 px-4 space-y-1">
		<div class="text-lg font-bold">Default</div>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="width 80%인 경우">
	<HippoWhiteFrame class="text-center py-5 w-[80%] mx-auto space-y-1">
		<div class="text-lg font-bold">width: 80%인 경우</div>
	</HippoWhiteFrame>
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
