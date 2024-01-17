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
	import SetupFrame from '$lib/codeboxframe/SetupFrame.svelte';
	import CodeBox from '$lib/codeboxframe/CodeBox.svelte';

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

<SetupFrame id="script">
	<pre id="script">
		<code>
&lt<span class="script">script</span>&gt
	import &#123 goto &#125 from '$app/navigation';
	import &#123 enhance, applyAction &#125 from '$app/forms';

	import &#123 HippoInput, HippoButton, HippoNavyButton, HippoWhiteFrame &#125 from '$lib/components/hippocomponent';
	import &#123 send &#125 from '$lib/api/call.js';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import SetupFrame from '$lib/codeboxframe/SetupFrame.svelte';

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

	async function sendAuth() &#123
		startTimer();

		const phonenum = phonenumFirst + '-' + phonenumSecond + '-' + phonenumThird;

		const res = await send(`/v2/auth_find/sms_req`, &#123
			method: 'POST',
			headers: &#123 'Content-Type': 'application/json' &#125,
			body: JSON.stringify(&#123
				name: name,
				phone: phonenum
			&#125)
		&#125);

		if (res?.result === false) &#123
			message = res?.message;
			resultStatus = res?.result;
		&#125 else if (res?.result === true) &#123
			message = '인증번호를 전송하였습니다.';
			resultStatus = res?.result;
		&#125
	&#125

	function startTimer() &#123
		leftTime = 89;
		timerStart = true;
	&#125

	let timerMessage = '';

	$: &#123
		if (timerStart) &#123
			if (timer) clearTimeout(timer);
			timerMessage = '';
			timer = setTimeout(() =&gt &#123
				leftTime -= 1;
			&#125, 1000);
		&#125
		if (leftTime === 0) &#123
			clearTimeout(timer);
			timerMessage = '인증번호를 다시 발송해주시기 바랍니다.';
		&#125
	&#125

	function goBack() &#123
		goto('/');
	&#125

	function goToFindPassword() &#123
		goto('/findPW');
	&#125

	function remainField() &#123
		return async (&#123 result &#125) =&gt &#123
			await applyAction(result);
		&#125;
	&#125
&lt<span class="script">script</span>&gt
		</code>
<code>
&lt<span class="script">style</span>&gt
	.background &#123
		background-image: url('src/lib/images/loginImg.png');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: contain;
	&#125
&lt/<span class="script">style</span>&gt
</code>
	</pre>
</SetupFrame>

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

<CodeBox class="mt-10" id="body">
	<pre id="body">
		<code>
&ltdiv class="w-full min-h-screen flex flex-col items-center justify-center background"&gt
		&ltHippoWhiteFrame&gt
			&ltdiv class="bg-white w-[31rem] h-[31rem] rounded-xl mx-0 px-11 z-10"&gt
				&ltdiv class="mt-12 flex justify-between"&gt
					&ltdiv class="text-hippNavy text-2xl font-extrabold opacity-80"&gt아이디 찾기&lt/div&gt
					&ltbutton type="button" class="text-base font-semibold text-[#404040]" on:click=&#123goBack&#125&gt
						뒤로가기
					&lt/button&gt
				&lt/div&gt

				&ltdiv class="mt-8"&gt
					&ltspan class="text-sm font-normal text-[#919191]"&gt이름&lt/span&gt
					&ltHippoInput class="mt-2 w-full" bind:value=&#123name&#125 name="name" placeholder="2자 이상" /&gt
				&lt/div&gt
				&ltdiv class="mt-5"&gt
					&ltspan class="text-sm font-normal text-[#919191]"&gt전화 번호&lt/span&gt
					&ltdiv class="flex justify-between items-center w-full mt-2"&gt
						&ltdiv class="w-[70%] flex items-center"&gt
							&ltHippoInput
								bind:value=&#123phonenumFirst&#125
								name="phonenum"
								placeholder="010"
								maxlength="3"
								class="w-[30%]"
							/&gt
							&ltdiv class="mx-1"&gt-&lt/div&gt
							&ltHippoInput
								bind:value=&#123phonenumSecond&#125
								name="phonenum"
								placeholder="0000"
								maxlength="4"
								class="w-[30%]"
							/&gt
							&ltdiv class="mx-1"&gt-&lt/div&gt
							&ltHippoInput
								bind:value=&#123phonenumThird&#125
								name="phonenum"
								placeholder="0000"
								maxlength="4"
								class="w-[30%]"
							/&gt
						&lt/div&gt
						&ltHippoButton
							on:click=&#123sendAuth&#125
							class="bg-[#696969] px-4 py-2 text-sm bg-[#696969] text-white"
							&gt인증번호 발송&lt/HippoButton
						&gt
					&lt/div&gt
				&lt/div&gt

				&#123#if resultStatus === false && message&#125
					&ltdiv class="mt-3 text-red-500"&gt
						&#123message&#125
					&lt/div&gt
				&#123/if&#125

				&ltform method="POST" action="?/sendAuthenticationNumber" use:enhance=&#123remainField&#125&gt
					&ltdiv class=&#123form?.result?.result === false ? 'mt-3' : 'mt-5'&#125&gt
						&ltdiv class="flex space-x-3"&gt
							&ltdiv class="text-sm font-normal text-[#919191]"&gt인증번호 입력&lt/div&gt
							&#123#if timerStart && resultStatus === true && leftTime &gt 0&#125
								&ltdiv class="text-sm font-bold text-black"&gt남은 시간 : &#123leftTime&#125초&lt/div&gt
							&#123:else if timerStart && resultStatus === true && leftTime &lt= 0&#125
								&ltdiv class="text-sm font-bold text-red-500"&gt&#123timerMessage&#125&lt/div&gt
							&#123/if&#125
						&lt/div&gt
						&ltinput type="hidden" bind:value=&#123name&#125 name="name" /&gt
						&ltinput type="hidden" bind:value=&#123phonenumFirst&#125 name="phonenum" /&gt
						&ltinput type="hidden" bind:value=&#123phonenumSecond&#125 name="phonenum" /&gt
						&ltinput type="hidden" bind:value=&#123phonenumThird&#125 name="phonenum" /&gt
						&ltHippoInput
							bind:value=&#123authentication_number&#125
							name="authenticate"
							placeholder="6자리"
							class="mt-2 w-full"
						/&gt
					&lt/div&gt

					&#123#if form?.result?.result === true && form?.result?.message !== 'ok'&#125
						&ltdiv class="mt-3"&gt
							&#123form?.result?.message&#125
						&lt/div&gt
					&#123/if&#125

					&ltdiv class="flex justify-between mt-[30px]"&gt
						&ltHippoButton
							on:click=&#123goToFindPassword&#125
							class="w-[46%] h-[46px] border border-hippNavy text-hippNavy"
						&gt
							비밀번호 찾기
						&lt/HippoButton&gt

						&ltHippoNavyButton type="submit" class="h-[46px] w-[46%]"&gt아이디 찾기&lt/HippoNavyButton&gt
					&lt/div&gt
				&lt/form&gt
			&lt/div&gt
			&#123#if form?.result?.id&#125
				&ltdiv class="flex flex-wrap mt-10 bg-white p-5 rounded-xl z-10 min-w-[200px] max-w-[550px]"&gt
					&ltdiv class="mr-2"&gt아이디는&lt/div&gt

					&#123#each form?.result?.id as uid, i&#125
						&ltspan class="text-center text-blue-500 font-bold"
							&gt&#123uid&#125&ltspan class=&#123form?.result?.id.length - 1 === i ? 'hidden' : ''&#125&gt,&lt/span&gt
						&lt/span&gt
					&#123/each&#125

					&ltdiv class="ml-2"&gt입니다.&lt/div&gt
				&lt/div&gt
			&#123/if&#125
		&lt/HippoWhiteFrame&gt
	&lt/div&gt
		</code>
	</pre>
</CodeBox>

<style>
	.background {
		background-image: url('/src/lib/images/loginImg.png');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: contain;
	}
</style>
