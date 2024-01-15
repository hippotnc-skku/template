<script>
	import HippoSelect from '$lib/components/hippocomponent/select/HippoSelect.svelte';
	import { notifications } from '$lib/components/notification/notifications';
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	let a = 1;
	function onChange(e) {
		notifications.success(`선택한 값은 ${e.target.value}입니다.`, 500);
	}

	const options = [
		{ name: 'first', value: 1 },
		{ name: 'second', value: 2 },
		{ name: 'third', value: 3 },
		{ name: 'fourth', value: 4 },
		{ name: 'fifth', value: 5 },
		{ name: 'sixth', value: 6 },
		{ name: 'senvth', value: 7 },
		{ name: 'eighth', value: 8 },
		{ name: 'ninth', value: 9 },
		{ name: 'tenth', value: 10 }
	];
</script>

<HippoWhiteFrame class="text-center py-5 w-full space-y-1">
	<div class="text-lg font-bold">크기 변환은 padding을 조절하시면 됩니다.</div>
	<div class="text-lg font-bold">
		그 이외에 id나 type를 넣으시면 적용이됩니다.(ex: type = "submit", id ="id")
	</div>
</HippoWhiteFrame>

<CodeExampleFrame name="SetUp">
	<iframe
		title="setup"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:460px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fselect%2F_temp.svelte%3Fts%3D4%23L1-L20&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>

<CodeExampleFrame>
	<HippoWhiteFrame class="p-5">
		<div class="text-lg font-bold">길이가 긴 select</div>
		<HippoSelect class="w-96 text-gray-900 border-gray-300" on:change={(e) => onChange(e)}>
			<option disabled selected>숫자를 선택하세요.</option>
			{#each options as option}
				<option value={option.value}>{option.name}</option>
			{/each}
		</HippoSelect>

		<div class="text-lg font-bold mt-10">길이가 짧은 select</div>
		<HippoSelect class="w-48 text-gray-900 border-gray-300" on:change={(e) => onChange(e)}>
			<option disabled selected>숫자를 선택하세요.</option>
			{#each options as option}
				<option value={option.value}>{option.name}</option>
			{/each}
		</HippoSelect>

		<div class="text-lg font-bold mt-10">첫 요소 선택 select</div>
		<HippoSelect class="w-96 text-gray-900 border-gray-300" on:change={(e) => onChange(e)}>
			<option disabled selected>숫자를 선택하세요.</option>
			{#each options as option}
				<option selected={option.value === 1} value={option.value}>{option.name}</option>
			{/each}
		</HippoSelect>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame>
	<iframe
		title="default"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:460px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fselect%2F_temp.svelte%3Fts%3D4%23L22-L41&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>

<CodeExampleFrame name="Colors">
	<HippoWhiteFrame class="p-5">
		<div class="flex flex-wrap gap-5">
			<HippoSelect class="w-48 border-[#1E2666] text-[#1E2666]" on:change={(e) => onChange(e)}>
				<option disabled selected>숫자를 선택하세요.(1)</option>
				{#each options as option}
					<option value={option.value}>{option.name}</option>
				{/each}
			</HippoSelect>

			<HippoSelect class="w-48 border-[#205CC2] text-[#205CC2]" on:change={(e) => onChange(e)}>
				<option disabled selected>숫자를 선택하세요.(2)</option>
				{#each options as option}
					<option value={option.value}>{option.name}</option>
				{/each}
			</HippoSelect>

			<HippoSelect class="w-48 border-[#3561AC] text-[#3561AC]" on:change={(e) => onChange(e)}>
				<option disabled selected>숫자를 선택하세요.(3)</option>
				{#each options as option}
					<option value={option.value}>{option.name}</option>
				{/each}
			</HippoSelect>

			<HippoSelect class="w-48 border-[#DB0F26] text-[#DB0F26]" on:change={(e) => onChange(e)}>
				<option disabled selected>숫자를 선택하세요.(4)</option>
				{#each options as option}
					<option value={option.value}>{option.name}</option>
				{/each}
			</HippoSelect>

			<HippoSelect class="w-48 border-[#FF9114] text-[#FF9114]" on:change={(e) => onChange(e)}>
				<option disabled selected>숫자를 선택하세요.(5)</option>
				{#each options as option}
					<option value={option.value}>{option.name}</option>
				{/each}
			</HippoSelect>

			<HippoSelect class="w-48 border-[#39C261] text-[#39C261]" on:change={(e) => onChange(e)}>
				<option disabled selected>숫자를 선택하세요.(6)</option>
				{#each options as option}
					<option value={option.value}>{option.name}</option>
				{/each}
			</HippoSelect>

			<HippoSelect class="w-48 border-[#F15D5D] text-[#F15D5D]" on:change={(e) => onChange(e)}>
				<option disabled selected>숫자를 선택하세요.(7)</option>
				{#each options as option}
					<option value={option.value}>{option.name}</option>
				{/each}
			</HippoSelect>

			<HippoSelect class="w-48 border-[#373838] text-[#373838]" on:change={(e) => onChange(e)}>
				<option disabled selected>숫자를 선택하세요.(8)</option>
				{#each options as option}
					<option value={option.value}>{option.name}</option>
				{/each}
			</HippoSelect>
			<HippoSelect class="w-48 border-[#BCBCBC] text-[#BCBCBC]" on:change={(e) => onChange(e)}>
				<option disabled selected>숫자를 선택하세요.(9)</option>
				{#each options as option}
					<option value={option.value}>{option.name}</option>
				{/each}
			</HippoSelect>
			<HippoSelect class="w-48 border-[#1D58BD] text-[#1D58BD]" on:change={(e) => onChange(e)}>
				<option disabled selected>숫자를 선택하세요.(10)</option>
				{#each options as option}
					<option value={option.value}>{option.name}</option>
				{/each}
			</HippoSelect>

			<HippoSelect class="w-48 border-[#4175CE] text-[#4175CE]" on:change={(e) => onChange(e)}>
				<option disabled selected>숫자를 선택하세요.(11)</option>
				{#each options as option}
					<option value={option.value}>{option.name}</option>
				{/each}
			</HippoSelect>
			<HippoSelect class="w-48 border-[#1349A5] text-[#1349A5]" on:change={(e) => onChange(e)}>
				<option disabled selected>숫자를 선택하세요.(12)</option>
				{#each options as option}
					<option value={option.value}>{option.name}</option>
				{/each}
			</HippoSelect>
			<HippoSelect class="w-48 border-[#7B7B7B] text-[#7B7B7B]" on:change={(e) => onChange(e)}>
				<option disabled selected>숫자를 선택하세요.(13)</option>
				{#each options as option}
					<option value={option.value}>{option.name}</option>
				{/each}
			</HippoSelect>
			<HippoSelect class="w-48 border-[#303030] text-[#303030]" on:change={(e) => onChange(e)}>
				<option disabled selected>숫자를 선택하세요.(14)</option>
				{#each options as option}
					<option value={option.value}>{option.name}</option>
				{/each}
			</HippoSelect>
			<HippoSelect class="w-48 border-[#DEDEDE] text-[#DEDEDE]" on:change={(e) => onChange(e)}>
				<option disabled selected>숫자를 선택하세요.(15)</option>
				{#each options as option}
					<option value={option.value}>{option.name}</option>
				{/each}
			</HippoSelect>
		</div>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="Color">
	<iframe
		title="color"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:2224px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fselect%2F_temp.svelte%3Fts%3D4%23L43-L146&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>
