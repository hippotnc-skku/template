<script lang="ts">
	import { page } from '$app/stores';
	import SideBar from './SideBar.svelte';
	import Header from './Header.svelte';
	import Toast from '$lib/components/notification/Toast.svelte';
	import Popup from '$lib/components/popup.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';
	import Navbar from './Navbar.svelte';

	let showSideBar: string;
	// 로그인 한 사람의 이름을 가져옴

	// 사이드바 열고닫기 함수(css이용하여)
	function showSideBarFunction() {
		if (showSideBar === 'transition duration-500 ease-in-out lg:translate-x-0 px-2 sm:px-0') {
			showSideBar = 'transition duration-500 ease-in-out -translate-x-96 lg:translate-x-0';
		} else {
			showSideBar = 'transition duration-500 ease-in-out lg:translate-x-0 px-2 sm:px-0';
		}
	}

	function setToFalse() {
		showSideBar = 'transition duration-500 ease-in-out -translate-x-96 lg:translate-x-0';
		document.getElementById('menu').classList.toggle('open');
	}
</script>

<svelte:body
	class="m-0 font-sans antialiased font-normal text-left leading-default text-base bg-gray-50 text-slate-500"
/>
<div class="flex min-h-screen">
	<SideBar {showSideBar} on:close={setToFalse} />

	<div
		class="ease-soft-in-out min-h-screen rounded-xl lg:ml-60 transition-all duration-200 flex flex-col item-center w-full min-w-[560px] flex flex-col justify-between"
	>
		<Header on:sideBar={showSideBarFunction} />
		<div class="md:px-2.5 lg:px-3.5 xl:px-10 pt-[2.5rem] mt-10 h-full">
			<Navbar />
			<slot />
		</div>
		<div class="mt-10">
			<Footer />
		</div>
	</div>
</div>

<Toast />
<!-- <Popup open={true} data={data.pops}><div slot="body">공지사항 기입</div></Popup> -->
