<script>
	import HippoSelect from '$lib/components/hippocomponent/select/HippoSelect.svelte';

	function onChange(e) {
		console.log('111');
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

<HippoSelect class="w-96 text-gray-900 border-gray-300" on:change={(e) => onChange(e)}>
	<option disabled selected>숫자를 선택하세요.</option>
	{#each options as option}
		<option value={option.value}>{option.name}</option>
	{/each}
</HippoSelect>

<HippoSelect class="w-48 text-gray-900 border-gray-300" on:change={(e) => onChange(e)}>
	<option disabled selected>숫자를 선택하세요.</option>
	{#each options as option}
		<option value={option.value}>{option.name}</option>
	{/each}
</HippoSelect>

<HippoSelect class="w-96 text-gray-900 border-gray-300" on:change={(e) => onChange(e)}>
	<option disabled selected>숫자를 선택하세요.</option>
	{#each options as option}
		<option selected={option.value === 1} value={option.value}>{option.name}</option>
	{/each}
</HippoSelect>

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
