<script>
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import { HippoCheckBox } from '$lib/components/hippocomponent';
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import { notifications } from '$lib/components/notification/notifications';

	function onChange() {
		notifications.success('체크 변화 감지', 500);
	}
</script>

<HippoWhiteFrame class="text-center py-5 w-full space-y-1">
	<div class="text-lg font-bold">크기 변환은 size의 width 와 height를(w,h) 조절하시면 됩니다.</div>
	<div class="text-lg font-bold">
		그 이외에 id나 checked등을 넣으시면 적용이됩니다.(ex: id ="id")
	</div>
</HippoWhiteFrame>

<CodeExampleFrame>
	<HippoWhiteFrame class="mt-10 p-5 flex">
		<div class="flex gap-5 mx-auto">
			<HippoCheckBox
				class="text-black"
				id="id"
				name="name"
				value="0"
				size="w-8 h-8"
				on:change={onChange}
				>큰 체크
			</HippoCheckBox>

			<HippoCheckBox
				class="text-black"
				id="id"
				name="name"
				value="0"
				size="w-4 h-4"
				on:change={onChange}
				>작은 체크
			</HippoCheckBox>

			<HippoCheckBox
				class="text-black"
				id="id"
				name="name"
				value="0"
				size="w-4 h-4"
				distance="ml-4"
				on:change={onChange}
				>레이블 거리 먼 체크
			</HippoCheckBox>
		</div>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="Colors">
	<HippoWhiteFrame class="p-5 flex flex-wrap gap-5">
		<HippoCheckBox
			class="text-[#1E2666]"
			id="id"
			name="name"
			value="0"
			checked
			size="w-8 h-8"
			on:change={onChange}
			><span class="font-bold">체크박스 1</span>
		</HippoCheckBox>

		<HippoCheckBox
			class="text-[#205CC2]"
			id="id"
			name="name"
			value="0"
			checked
			size="w-8 h-8"
			on:change={onChange}
			><span class="font-bold">체크박스 2</span>
		</HippoCheckBox>

		<HippoCheckBox
			class="text-[#DB0F26]"
			id="id"
			name="name"
			value="0"
			checked
			size="w-8 h-8"
			on:change={onChange}
			><span class="font-bold">체크박스 2</span>
		</HippoCheckBox>

		<HippoCheckBox
			class="text-[#3561AC]"
			id="id"
			name="name"
			value="0"
			checked
			size="w-8 h-8"
			on:change={onChange}
			><span class="font-bold">체크박스 2</span>
		</HippoCheckBox>

		<HippoCheckBox
			class="text-[#FF9114]"
			id="id"
			name="name"
			value="0"
			checked
			size="w-8 h-8"
			on:change={onChange}
			><span class="font-bold">체크박스 2</span>
		</HippoCheckBox>

		<HippoCheckBox
			class="text-[#39C261]"
			id="id"
			name="name"
			value="0"
			checked
			size="w-8 h-8"
			on:change={onChange}
			><span class="font-bold">체크박스 2</span>
		</HippoCheckBox>

		<HippoCheckBox
			class="text-[#F15D5D]"
			id="id"
			name="name"
			value="0"
			checked
			size="w-8 h-8"
			on:change={onChange}
			><span class="font-bold">체크박스 2</span>
		</HippoCheckBox>
		<HippoCheckBox
			class="text-[#373838]"
			id="id"
			name="name"
			value="0"
			checked
			size="w-8 h-8"
			on:change={onChange}
			><span class="font-bold">체크박스 2</span>
		</HippoCheckBox>

		<HippoCheckBox
			class="text-[#BCBCBC]"
			id="id"
			name="name"
			value="0"
			checked
			size="w-8 h-8"
			on:change={onChange}
			><span class="font-bold">체크박스 2</span>
		</HippoCheckBox>
		<HippoCheckBox
			class="text-[#1D58BD]"
			id="id"
			name="name"
			value="0"
			checked
			size="w-8 h-8"
			on:change={onChange}
			><span class="font-bold">체크박스 2</span>
		</HippoCheckBox>

		<HippoCheckBox
			class="text-[#4175CE]"
			id="id"
			name="name"
			value="0"
			checked
			size="w-8 h-8"
			on:change={onChange}
			><span class="font-bold">체크박스 2</span>
		</HippoCheckBox>

		<HippoCheckBox
			class="text-[#1349A5]"
			id="id"
			name="name"
			value="0"
			checked
			size="w-8 h-8"
			on:change={onChange}
			><span class="font-bold">체크박스 2</span>
		</HippoCheckBox>

		<HippoCheckBox
			class="text-[#7B7B7B]"
			id="id"
			name="name"
			value="0"
			checked
			size="w-8 h-8"
			on:change={onChange}
			><span class="font-bold">체크박스 2</span>
		</HippoCheckBox>

		<HippoCheckBox
			class="text-[#303030]"
			id="id"
			name="name"
			value="0"
			checked
			size="w-8 h-8"
			on:change={onChange}
			><span class="font-bold">체크박스 2</span>
		</HippoCheckBox>

		<HippoCheckBox
			class="text-[#DEDEDE]"
			id="id"
			name="name"
			value="0"
			checked
			size="w-8 h-8"
			on:change={onChange}
			><span class="font-bold">체크박스 2</span>
		</HippoCheckBox>
	</HippoWhiteFrame>
</CodeExampleFrame>
