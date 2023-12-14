<script lang="ts">
	import { page } from '$app/stores';
	import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		SidebarDropdownItem,
		SidebarDropdownWrapper
	} from '$lib/components/helpers/sidebars';
	import classNames from 'classnames';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let showSideBar = 'transition duration-500 ease-in-out -translate-x-96 lg:translate-x-0';

	let routes = [
		{
			title: 'Button',
			link: '/button',
			icon: 'fa-solid fa-address-book'
		},
		{
			title: 'Select',
			link: '/select',
			icon: 'fa-solid fa-address-card'
		},
		{
			title: 'Input',
			link: '/input',
			icon: 'fa-regular fa-calendar-days'
		},
		{
			title: 'Checkbox',
			link: '/checkbox',
			icon: 'fa fa-cog'
		},
		{
			title: 'Pagination',
			link: '/pagination',
			icon: 'fa-solid fa-clock-rotate-left'
		},
		{
			title: 'Frame',
			link: '/frame',
			icon: 'fa-solid fa-wallet'
		},
		{
			title: 'Table',
			link: '/table',
			icon: 'fa-solid fa-bullhorn'
		}
		// {
		// 	title: 'FAQ',
		// 	link: '/faq',
		// 	icon: 'fa-solid fa-question'
		// }
	];

	function setSideBarToFalse() {
		showSideBar = 'transition duration-500 ease-in-out -translate-x-96 lg:translate-x-0';
		dispatch('close');
	}
</script>

<Sidebar class={showSideBar}>
	<SidebarWrapper>
		<div class="mt-10 opacity-0 ml-3">X</div>
		<SidebarGroup>
			<li class="mt-3 w-full" />

			{#each routes as route}
				<SidebarItem
					label={route.title}
					href={route.link}
					active={$page.url.pathname.includes(route.link) ? true : false}
					on:click={setSideBarToFalse}
					target={$page.url.pathname.includes(route.link) ? '_self' : ''}
				>
					<svelte:fragment slot="icon">
						<i
							class={classNames(
								route.icon,
								$page.url.pathname.includes(route.link) ? 'text-white' : 'text-icon-gray'
							)}
						/>
					</svelte:fragment>
				</SidebarItem>
			{/each}
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>
