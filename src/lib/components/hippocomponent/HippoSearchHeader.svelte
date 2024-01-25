<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import ButtonTooltip from '$lib/components/helpers/buttons/ButtonTooltip.svelte';
	import Tooltip from '$lib/components/helpers/tooltips/Tooltip.svelte';
	import { HippoInput, HippoNavyButton, HippoButton } from '$lib/components/hippocomponent';
	import { createEventDispatcher } from 'svelte';
	import type { ButtonColor } from './type';
	export let needButtons: Boolean = true;
	export let firstName: string = '첫번째';
	export let secondName: string = '두번째';
	export let thirdName: string = '세번째';
	export let hasSecondButton: Boolean = false;
	export let hasThirdButton: Boolean = false;
	export let firstColor: ButtonColor = 'green';
	export let secondColor: ButtonColor = 'green';
	export let thirdColor: ButtonColor = 'green';
	export let placeholder: string = '검색...';
	export let searchKey: string = 'name';

	const dispatch = createEventDispatcher();

	function onFirstButtonClicked() {
		dispatch('onFirst');
	}

	function onSecondButtonClicked() {
		dispatch('onSecond');
	}

	function onThirdButtonClicked() {
		dispatch('onThird');
	}

	let search = '';

	const searchByName = () => {
		if (search === '') {
			goto(`${$page.url.pathname}`, { invalidateAll: true });
			return;
		}
		$page.url.searchParams.set(searchKey, search);
		$page.url.searchParams.set('page', '1');
		goto(`${$page.url.pathname}${$page.url.search}`, { invalidateAll: true });
	};

	const resetSearch = () => {
		goto(`${$page.url.pathname}`, { invalidateAll: true });
		search = '';
	};

	function onKeyPress(e) {
		if (e.charCode === 13) {
			searchByName();
		}
	}
</script>

<div class="flex justify-between w-full">
	<div class="flex gap-3">
		<slot />
		{#if needButtons}
			<HippoButton color={firstColor} on:click={onFirstButtonClicked}>
				{firstName}
			</HippoButton>

			{#if hasSecondButton}
				<HippoButton color={secondColor} on:click={onSecondButtonClicked}>
					{secondName}
				</HippoButton>
			{/if}

			{#if hasThirdButton}
				<HippoButton color={thirdColor} on:click={onThirdButtonClicked}>
					{thirdName}
				</HippoButton>
			{/if}
			<!-- {:else}
		<div class="opacity-0">X</div> -->
		{/if}
	</div>
	<div class="flex gap-x-3 items-center">
		<div class="relative">
			<HippoInput
				bind:value={search}
				{placeholder}
				on:keypress={onKeyPress}
				padding="py-2.5 w-[280px]"
			/>
			<button
				id="search"
				class="absolute top-0 end-0 px-3 text-sm font-medium h-full text-white bg-hippNavy rounded-e-lg"
				on:click={searchByName}
			>
				<i class="fa-solid fa-magnifying-glass mr-1" />
			</button>
			<Tooltip tooltipTxt="검색하기" placement="bottom" triggeredBy="#search">검색하기</Tooltip>
		</div>
		<div class="h-full flex gap-x-3">
			<ButtonTooltip
				size="sm"
				outline={true}
				class="text-xs h-full"
				color="light"
				tooltipTxt="초기화"
				on:click={resetSearch}
			>
				<i class="fa-solid fa-rotate-right" />
			</ButtonTooltip>
		</div>
	</div>
</div>
