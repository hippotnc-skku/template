<script lang="ts">
	import { goto } from '$app/navigation';
  import { page } from '$app/stores';
	import ButtonTooltip from '$lib/components/helpers/buttons/ButtonTooltip.svelte';
  import Tooltip from '$lib/components/helpers/tooltips/Tooltip.svelte';
	import { HippoInput, HippoNavyButton, HippoButton } from '$lib/components/hippocomponent';
	import { createEventDispatcher } from 'svelte';

  export let needButtons: Boolean = true
  export let firstName: string = '첫번째'
  export let secondName: string = '두번째'
  export let thirdName: string = '세번째'
  export let hasSecondButton: Boolean = false
  export let hasThirdButton: Boolean = false
  export let secondColor: string = 'bg-[#303030] text-white'
  export let thirdColor: string = 'bg-[#303030] text-white'

  const dispatch =  createEventDispatcher()

  function onFirstButtonClicked() {
    dispatch('onFirst')
  }

  function onSecondButtonClicked() {
    dispatch('onSecond')
  }

  function onThirdButtonClicked() {
    dispatch('onThird')
  }


  let search = ''

  const searchByName = () => {
		if (search === '') {
			goto(`${$page.url.pathname}`, { invalidateAll: true });
			return;
		}
		$page.url.searchParams.set('search', search);
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
  <div class="flex gap-x-3 items-center">
    <div class="relative">
      <HippoInput
        bind:value={search}
        placeholder="검색"
        on:keypress={onKeyPress}
        padding="py-2.5 w-full"
      />
      <button id="search" class="absolute top-0 end-0 px-3 text-sm font-medium h-full text-white bg-hippNavy rounded-e-lg" on:click={searchByName}>
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
  {#if needButtons}
    <div>
      <HippoNavyButton class="h-full px-4" on:click={onFirstButtonClicked}>
        {firstName}
      </HippoNavyButton>

      {#if hasSecondButton}
        <HippoButton class="{secondColor} px-4 h-full" on:click={onSecondButtonClicked}>
          {secondName}
        </HippoButton>
      {/if}

      {#if hasThirdButton}
        <HippoButton class="{thirdColor} px-4 h-full" on:click={onThirdButtonClicked}>
          {thirdName}
        </HippoButton>
      {/if}
    </div>
  {/if}
</div>
