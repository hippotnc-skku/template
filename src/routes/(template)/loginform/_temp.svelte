<script>
	import { enhance, applyAction } from '$app/forms';
	import { goto } from '$app/navigation';

	import Spinner from '$lib/components/helpers/spinners/Spinner.svelte';
	import Logo from '$images/hippo_logo copy.png';
	import {
		HippoInput,
		HippoCheckBox,
		HippoNavyButton,
		HippoTextButton
	} from '$lib/components/hippocomponent';
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';

	export let form;
	export let data;

	let id = '';
	let pw = '';
	let load = false;
	let checkboxCheck = false;

	// 제출 실행 여부 확인
	function remainIDPWIFFailedLog() {
		load = true;
		return async ({ result }) => {
			await applyAction(result);
			if (result?.data?.status === 'success') {
				goto('/customer');
			}
			load = false;
		};
	}

	// 아이디 기억하기 했을 경우 아이디를 넣고 체크박스 on 시킴
	if (data?.uid) {
		id = data.uid;
		checkboxCheck = true;
	} else {
		checkboxCheck = false;
	}

	function firstClick() {
		console.log('firstClick');
	}

	function secondClick() {
		console.log('firstClick');
	}
</script>

<div class="flex justify-center items-center h-full w-full background min-h-screen">
	<HippoWhiteFrame class="px-10 pt-10 pb-14">
		<div class="w-[350px]">
			<div class="flex justify-center">
				<img src={Logo} alt="logo" class="w-[200px] mb-5" />
			</div>
			<div class="text-[26px] font-bold mb-4">로그인</div>

			<div class="text-[15px] mb-4">아이디와 비밀번호를 입력해주세요.</div>

			<form method="POST" action="/?/login" use:enhance={remainIDPWIFFailedLog}>
				<HippoInput class="mb-3 w-full" name="uid" placeholder="ID" bind:value={id} />

				<HippoInput
					class="mb-4 w-full"
					type="password"
					name="password"
					placeholder="password"
					bind:value={pw}
				/>

				<HippoCheckBox name="rememberID" bind:checked={checkboxCheck}>아이디 기억하기</HippoCheckBox
				>

				{#if form?.status && form?.status !== 'success'}
					<div class="text-red-600">잘못된 아이디 또는 비밀번호 입니다.</div>
				{/if}

				<HippoNavyButton class="w-full h-[46px] mt-4" type="submit">
					{#if load}
						<Spinner />
					{:else}
						로그인
					{/if}
				</HippoNavyButton>
			</form>

			<div class="flex justify-between items-start mt-8">
				<div class="text-[#afafaf] text-[13px]">아이디/비밀번호를 잊어버리셨나요?</div>

				<div class="flex">
					<HippoTextButton on:click={firstClick} class="text-[13px]">아이디</HippoTextButton>
					<div class="mx-0.5 text-primary text-[13px]">/</div>
					<HippoTextButton on:click={secondClick} class="text-[13px]">비밀번호 찾기</HippoTextButton
					>
				</div>
			</div>
		</div>
	</HippoWhiteFrame>
</div>

<style>
	.background {
		background-image: url('/src/lib/images/loginImg.png');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: contain;
	}
</style>
