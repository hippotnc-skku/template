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
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import SetupFrame from '$lib/codeboxframe/SetupFrame.svelte';
	import CodeBox from '$lib/codeboxframe/CodeBox.svelte';

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

<SetupFrame id="script">
	<pre id="script">
		<code>
	&lt<span class="script">script</span>&gt
		import &#123 enhance, applyAction &#125 from '$app/forms';
		import &#123 goto &#125 from '$app/navigation';

		import Spinner from '$lib/components/helpers/spinners/Spinner.svelte';
		import Logo from '$images/hippo_logo copy.png';
		import &#123
			HippoInput,
			HippoCheckBox,
			HippoNavyButton,
			HippoTextButton
		&#125 from '$lib/components/hippocomponent';
		import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
		import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
		import SetupFrame from '$lib/codeboxframe/SetupFrame.svelte';

		export let form;
		export let data;

		let id = '';
		let pw = '';
		let load = false;
		let checkboxCheck = false;

		function remainIDPWIFFailedLog() &#123
			load = true
			return async (&#123 result &#125) =&gt &#123
				await applyAction(result)
				if (result?.data?.status === 'success') &#123goto('/customer')&#125
				load = false
			&#125
		&#125

		if (data?.uid) &#123
			id = data.uid
			checkboxCheck = true
		&#125 else &#123
			checkboxCheck = false
		&#125

		function firstClick() &#123
			console.log('firstClick')
		&#125

		function secondClick() &#123
			console.log('firstClick')
		&#125
	&lt/<span class="script">script</span>&gt
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

					<HippoCheckBox name="rememberID" bind:checked={checkboxCheck}
						>아이디 기억하기</HippoCheckBox
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
						<HippoTextButton on:click={secondClick} class="text-[13px]"
							>비밀번호 찾기</HippoTextButton
						>
					</div>
				</div>
			</div>
		</HippoWhiteFrame>
	</div>
</CodeExampleFrame>

<CodeBox class="mt-10" id="body">
	<pre id="body">
		<code>
&ltdiv class="flex justify-center items-center h-full w-full background"&gt
	&ltHippoWhiteFrame class="px-10 pt-10 pb-14"&gt
		&ltdiv class="w-[350px]"&gt
			&ltdiv class="flex justify-center"&gt
			&ltimg src=&#123Logo&#125 alt="logo" class="w-[200px] mb-5" /&gt
			&lt/div&gt
			&ltdiv class="text-[26px] font-bold mb-4"&gt로그인&lt/div&gt
		
			&ltdiv class="text-[15px] mb-4"&gt아이디와 비밀번호를 입력해주세요.&lt/div&gt
		
			&ltform method="POST" action="/?/login" use:enhance=&#123remainIDPWIFFailedLog&#125&gt
				&ltHippoInput class="mb-3 w-full" name="uid" placeholder="ID" bind:value=&#123id&#125 /&gt
			
				&ltHippoInput
					class="mb-4 w-full"
					type="password"
					name="password"
					placeholder="password"
					bind:value=&#123pw&#125
				/&gt
			
				&ltHippoCheckBox name="rememberID" bind:checked=&#123checkboxCheck&#125&gt아이디 기억하기&lt/HippoCheckBox&gt

				&#123#if form?.status && form?.status !== 'success'&#125
					&ltdiv class="text-red-600"&gt잘못된 아이디 또는 비밀번호 입니다.&lt/div&gt
				&#123/if&#125

				&ltHippoNavyButton class="w-full h-[46px] mt-4" type="submit"&gt
					&#123#if load&#125
						&ltSpinner /&gt
					&#123:else&#125
						로그인
					&#123/if&#125
				&lt/HippoNavyButton&gt
			&lt/form&gt

			&ltdiv class="flex justify-between items-start mt-8"&gt
			&ltdiv class="text-[#afafaf] text-[13px]"&gt아이디/비밀번호를 잊어버리셨나요?&lt/div&gt

			&ltdiv class="flex"&gt
				&ltHippoTextButton on:click=&#123firstClick&#125 class="text-[13px]"&gt아이디&lt/HippoTextButton&gt
					&ltdiv class="mx-0.5 text-primary text-[13px]"&gt/&lt/div&gt
				&ltHippoTextButton on:click=&#123secondClick&#125 class="text-[13px]"&gt비밀번호 찾기&lt/HippoTextButton&gt
			&lt/div&gt
			&lt/div&gt
		&lt/div&gt
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
