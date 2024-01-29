<script lang="ts">
	import { goto } from '$app/navigation';
	import { enhance, applyAction } from '$app/forms';

	import {
		HippoInput,
		HippoButton,
		HippoNavyButton,
		HippoWhiteFrame
	} from '$lib/components/hippocomponent';
	import { send } from '$lib/api/call.js';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';

	export let form;

	let name = '';
	let phonenumFirst = '';
	let phonenumSecond = '';
	let phonenumThird = '';
	let authentication_number = '';

	let leftTime: number;
	let timer;
	let timerStart = false;
	let message = '';
	let resultStatus;

	async function sendAuth() {
		startTimer();

		const phonenum = phonenumFirst + '-' + phonenumSecond + '-' + phonenumThird;

		const res = await send(`/v2/auth_find/sms_req`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: name,
				phone: phonenum
			})
		});

		if (res?.result === false) {
			message = res?.message;
			resultStatus = res?.result;
		} else if (res?.result === true) {
			message = '인증번호를 전송하였습니다.';
			resultStatus = res?.result;
		}
	}

	function startTimer() {
		leftTime = 89;
		timerStart = true;
	}

	let timerMessage = '';
	$: {
		if (timerStart) {
			if (timer) clearTimeout(timer);
			timerMessage = '';
			timer = setTimeout(() => {
				leftTime -= 1;
			}, 1000);
		}
		if (leftTime === 0) {
			clearTimeout(timer);
			timerMessage = '인증번호를 다시 발송해주시기 바랍니다.';
		}
	}

	function goBack() {
		goto('/');
	}

	function goToFindPassword() {
		goto('/findPW');
	}

	// 제출 실행 여부 확인
	function remainField() {
		return async ({ result }) => {
			await applyAction(result);
		};
	}
</script>

<CodeExampleFrame>
	<div class="w-full min-h-screen flex flex-col items-center justify-center background">
		<HippoWhiteFrame>
			<div class="bg-white w-[31rem] h-[31rem] rounded-xl mx-0 px-11 z-10">
				<div class="mt-12 flex justify-between">
					<div class="text-hippNavy text-2xl font-extrabold opacity-80">아이디 찾기</div>
					<button type="button" class="text-base font-semibold text-[#404040]" on:click={goBack}>
						뒤로가기
					</button>
				</div>

				<div class="mt-8">
					<span class="text-sm font-normal text-[#919191]">이름</span>
					<HippoInput class="mt-2 w-full" bind:value={name} name="name" placeholder="2자 이상" />
				</div>
				<div class="mt-5">
					<span class="text-sm font-normal text-[#919191]">전화 번호</span>
					<div class="flex justify-between items-center w-full mt-2">
						<div class="w-[70%] flex items-center">
							<HippoInput
								bind:value={phonenumFirst}
								name="phonenum"
								placeholder="010"
								maxlength="3"
								class="w-[30%]"
							/>
							<div class="mx-1">-</div>
							<HippoInput
								bind:value={phonenumSecond}
								name="phonenum"
								placeholder="0000"
								maxlength="4"
								class="w-[30%]"
							/>
							<div class="mx-1">-</div>
							<HippoInput
								bind:value={phonenumThird}
								name="phonenum"
								placeholder="0000"
								maxlength="4"
								class="w-[30%]"
							/>
						</div>
						<HippoButton
							on:click={sendAuth}
							class="bg-[#696969] px-4 py-2 text-sm bg-[#696969] text-white"
							>인증번호 발송</HippoButton
						>
					</div>
				</div>

				{#if resultStatus === false && message}
					<div class="mt-3 text-red-500">
						{message}
					</div>
				{/if}

				<form method="POST" action="?/sendAuthenticationNumber" use:enhance={remainField}>
					<div class={form?.result?.result === false ? 'mt-3' : 'mt-5'}>
						<div class="flex space-x-3">
							<div class="text-sm font-normal text-[#919191]">인증번호 입력</div>
							{#if timerStart && resultStatus === true && leftTime > 0}
								<div class="text-sm font-bold text-black">남은 시간 : {leftTime}초</div>
							{:else if timerStart && resultStatus === true && leftTime <= 0}
								<div class="text-sm font-bold text-red-500">{timerMessage}</div>
							{/if}
						</div>
						<input type="hidden" bind:value={name} name="name" />
						<input type="hidden" bind:value={phonenumFirst} name="phonenum" />
						<input type="hidden" bind:value={phonenumSecond} name="phonenum" />
						<input type="hidden" bind:value={phonenumThird} name="phonenum" />
						<HippoInput
							bind:value={authentication_number}
							name="authenticate"
							placeholder="6자리"
							class="mt-2 w-full"
						/>
					</div>

					{#if form?.result?.result === true && form?.result?.message !== 'ok'}
						<div class="mt-3">
							{form?.result?.message}
						</div>
					{/if}

					<div class="flex justify-between mt-[30px]">
						<HippoButton
							on:click={goToFindPassword}
							class="w-[46%] h-[46px] border border-hippNavy text-hippNavy"
						>
							비밀번호 찾기
						</HippoButton>

						<HippoNavyButton type="submit" class="h-[46px] w-[46%]">아이디 찾기</HippoNavyButton>
					</div>
				</form>
			</div>
			{#if form?.result?.id}
				<div class="flex flex-wrap mt-10 bg-white p-5 rounded-xl z-10 min-w-[200px] max-w-[550px]">
					<div class="mr-2">아이디는</div>

					{#each form?.result?.id as uid, i}
						<span class="text-center text-blue-500 font-bold"
							>{uid}<span class={form?.result?.id.length - 1 === i ? 'hidden' : ''}>,</span>
						</span>
					{/each}

					<div class="ml-2">입니다.</div>
				</div>
			{/if}
		</HippoWhiteFrame>
	</div>
</CodeExampleFrame>

<style>
	.background {
		background-image: url('/src/lib/images/loginImg.png');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: contain;
	}
</style>
