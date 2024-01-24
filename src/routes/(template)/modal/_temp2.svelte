<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import { Modal } from '$lib/components/helpers';
	import { notifications } from '$lib/components/notification/notifications';
	let confirmBillModal=false;

	function confirmBillState(){
		notifications.success('Modal창이 떴습니다.')
	}
</script>
<HippoWhiteFrame class="p-2 my-2">
	<Modal title="청구 확정" bind:open={confirmBillModal}>
		<div class="w-full max-w-full px-3 flex-0 mt-2 text-black">청구 확정하시겠습니까?</div>
		<Button on:click={confirmBillState}>청구 확정</Button>
		<Button color="alternative" on:click={() => (confirmBillModal = false)}>닫기</Button>
	</Modal>
</HippoWhiteFrame>