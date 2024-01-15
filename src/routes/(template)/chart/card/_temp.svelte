<script lang="ts">
	import ChartCard from '$lib/components/charts/template/chart_card.svelte';

	let cardOptions1 = {
		icon: 'fa-solid fa-users',
		title: '총 패밀리 수',
		value: 123,
		unit: '패밀리',
		change: 3,
		changeUnit: ''
	};
	let cardOptions2 = {
		icon: 'fa-solid fa-chart-mixed-up-circle-dollar',
		title: '월간 매출액',
		value: 15000000,
		unit: '원',
		change: -20,
		changeUnit: '%'
	};
	let cardOptions3 = {
		icon: 'fa-solid fa-chart-pie-simple-circle-dollar',
		title: '월간 매출 예상액',
		value: 22340000,
		unit: '원',
		change: 10,
		changeUnit: '%'
	};
	let cardOptions4 = {
		icon: 'fa-solid fa-head-side-goggles',
		title: '월간 플레이 수',
		value: 234,
		unit: '회',
		change: 15,
		changeUnit: ''
	};
</script>

<div class="flex justify-between">
	<ChartCard
		icon={cardOptions1.icon}
		title={cardOptions1.title}
		value={cardOptions1.value}
		unit={cardOptions1.unit}
		change={cardOptions1.change}
		changeUnit={cardOptions1.changeUnit}
	/>
	<ChartCard
		icon={cardOptions2.icon}
		title={cardOptions2.title}
		value={cardOptions2.value}
		unit={cardOptions2.unit}
		change={cardOptions2.change}
		changeUnit={cardOptions2.changeUnit}
	/>
	<ChartCard
		icon={cardOptions3.icon}
		title={cardOptions3.title}
		value={cardOptions3.value}
		unit={cardOptions3.unit}
		change={cardOptions3.change}
		changeUnit={cardOptions3.changeUnit}
	/>
	<ChartCard
		icon={cardOptions4.icon}
		title={cardOptions4.title}
		value={cardOptions4.value}
		unit={cardOptions4.unit}
		change={cardOptions4.change}
		changeUnit={cardOptions4.changeUnit}
	/>
</div>
