<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import { Modal } from '$lib/components/helpers';

	let series = [
		{
			name: 'name',
			data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
		}
	];
	let chartHeight = 350;
	let dataLabels = false;
	let strokeCurve = 'straight';
	let strokeWidth = 5;
	let titleText = 'title';
	let titleAlign = 'left';
	let titleFontSize = '20px';
	let titleFontWeight = 'bold';
	let grid = true;
	let gridColor = '#f3f3f3';
	let gridBorderColor = '#90A4AE';
	let gridOpacity = 0.5;
	let xaxis = true;
	let xaxisCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
	let xaxisTitle = 'xaxis title';
	let xaxisLablesRotate = -45;
	let yaxis = true;
	let yaxisTitle = 'yaxis title';
	let yaxisMin = 0;
	let yaxisMax = 200;
	let dropShadow = true;
	let toolbar = true;
	let markerSize = 1;
	let markerStrokeColors = '#FFF';
	let markerStrokeWidth = 2;
	let markerStrokeOpacity = 0.9;
	let legend = true;
	let legendPosition = 'top';
	let legendHorizontalAlign = 'center';
	let lineColors = ['#77B6EA'];
</script>
<HippoWhiteFrame>
<Modal title="모달창 제목" bind:open={editFamilyModal}>
	<div class="text-black">모달창을 띄운 이유 (예시 :패밀리를 수정하시겠습니까?)</div>

	<svelte:fragment slot="footer">
		<form method="POST" action="/family/{$page.params.id}/edit/?/put" use:enhance={checkEditFamily}>
			{#each Object.entries(submitFamily) as [key, value]}
				<input type="hidden" name={key} bind:value={family[key]} />
			{/each}
			<HippoButton color="green" type="submit">수정</HippoButton>
		</form>
		<HippoButton color="gray" on:click={() => (editFamilyModal = false)}>닫기</HippoButton>
	</svelte:fragment>
</Modal>
</HippoWhiteFrame>
