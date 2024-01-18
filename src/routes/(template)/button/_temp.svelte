<script lang="ts">
	import { HippoButton } from '$lib/components/hippocomponent';
	import { notifications } from '$lib/components/notification/notifications';

	function clicked() {
		notifications.success('클릭 됐습니다.', 500);
	}
</script>

<HippoButton color="green" on:click={clicked}>생성/수정</HippoButton>

<HippoButton color="orange" on:click={clicked}>삭제</HippoButton>

<HippoButton color="gray" on:click={clicked}>그 외</HippoButton>

<HippoButton color="blue" on:click={clicked}>기타</HippoButton>

<HippoButton color="red" on:click={clicked}>기타</HippoButton>
