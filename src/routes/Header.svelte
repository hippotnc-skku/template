<script>
	import { dropdownitems } from './dropdown.ts';
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';
	import { Dropdown, DropdownItem } from '$components/helpers';
	import Logo from '$images/hippo_logo copy.png';

	let innerHeight;
	const dispatch = createEventDispatcher();

	function itemClicked(link) {
		goto(link);
	}

	function openCloseSideBar() {
		document.getElementById('menu').classList.toggle('open');
		dispatch('sideBar');
	}
</script>

<svelte:window bind:scrollY={innerHeight} />

<div
	class="w-full top-0 left-0 fixed z-40 flex justify-end items-center {innerHeight > 30
		? 'bg-white shadow-xl h-[58px]'
		: 'h-[53px]'}"
>
	<div class="flex justify-between w-full px-2.5">
		<div class="flex items-center justify-start">
			<div class="lg:hidden z-50 pt-2" id="menu">
				<button
					id="menu-btn"
					type="button"
					class="z-50 block hamburger focus:outline-none"
					on:click={openCloseSideBar}
				>
					<span class="hamburger-top" />
					<span class="hamburger-middle" />
					<span class="hamburger-bottom" />
					<span class="hamburger-bottom2" />
				</button>
			</div>

			<div class="flex justify-start w-full items-center">
				<div class="text-black flex justify-between w-full items-center ml-4 mt-1.5">
					<a href="/">
						<img src={Logo} class="w-[100px] inline" alt="logo" />
						<div class="inline-block align-bottom">Template</div>
					</a>
				</div>
			</div>
		</div>

		<div class="flex items-center justify-end">
			<div class="lg:px-3.5 xl:pr-10 pl-5">
				<button class="dropdown font-bold">드롭다운</button>
			</div>
			<Dropdown triggeredBy=".dropdown">
				{#each dropdownitems as di}
					<DropdownItem
						defaultClass="font-medium py-2 hover:bg-gray-100 flex justify-center"
						on:click={() => itemClicked(di?.link)}>{di?.title}</DropdownItem
					>
				{/each}
			</Dropdown>
		</div>
	</div>
</div>
