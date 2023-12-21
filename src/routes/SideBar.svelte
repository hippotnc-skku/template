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
	import {routes} from './route'

	const dispatch = createEventDispatcher();

	export let showSideBar = 'transition duration-500 ease-in-out -translate-x-96 lg:translate-x-0';

	function setSideBarToFalse() {
		showSideBar = 'transition duration-500 ease-in-out -translate-x-96 lg:translate-x-0';
		dispatch('close');
	}
</script>

<Sidebar class={showSideBar}>
	<SidebarWrapper>
		<div class="mt-10 opacity-0 ml-3">X</div>
		<SidebarGroup>
			{#each routes as route}
				{#if route.items}
					<SidebarDropdownWrapper
						label={route.title}
						active={route.items.some((i) => i.link === $page.url.pathname)}
					>
							<svelte:fragment slot="icon">
								<i class={route.icon} />
							</svelte:fragment>
							{#each route.items as item}
								<SidebarDropdownItem
									label={item.title}
									href={item.link}
									on:click={setSideBarToFalse}
									active={item.link === $page.url.pathname}
								>
								<svelte:fragment slot="icon">
									<i
										class={classNames(
											item.icon,
											item.link === $page.url.pathname ? 'text-white' : 'text-icon-gray'
										)}
									/>
								</svelte:fragment>
								</SidebarDropdownItem>
							{/each}
						</SidebarDropdownWrapper>
					{:else}
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
					{/if}
			{/each}
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>
