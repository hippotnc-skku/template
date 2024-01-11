<script>
	import { onMount } from 'svelte';

	export let series = [
		{
			name: 'name',
			data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
		}
	];
	export let chartHeight = 350;
	export let dataLabels = false;
	export let strokeCurve = 'straight';
	export let strokeWidth = 5;
	export let titleText = '';
	export let titleAlign = 'left';
	export let titleFontSize = '14px';
	export let titleFontWeight = 'bold';
	export let grid = true;
	export let gridColor = '#f3f3f3';
	export let gridBorderColor = '#90A4AE';
	export let gridOpacity = 0.5;
	export let xaxis = true;
	export let xaxisCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
	export let xaxisTitle = '';
	export let xaxisLablesRotate = -45;
	export let yaxis = true;
	export let yaxisTitle = '';
	export let yaxisMin = function (min) {
		return min;
	};
	export let yaxisMax = function (max) {
		return max;
	};
	export let dropShadow = true;
	export let toolbar = true;
	export let markerSize = 1;
	export let markerStrokeColors = '#FFF';
	export let markerStrokeWidth = 2;
	export let markerStrokeOpacity = 0.9;
	export let legend = true;
	export let legendPosition = 'top';
	export let legendHorizontalAlign = 'center';
	export let lineColors = ['#77B6EA'];

	let options = {
		series: series,
		chart: {
			height: chartHeight,
			type: 'line',
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: dropShadow,
				color: '#000',
				top: 18,
				left: 7,
				blur: 10,
				opacity: 0.2
			},
			toolbar: {
				show: toolbar
			}
		},
		colors: lineColors,
		dataLabels: {
			enabled: dataLabels
		},
		stroke: {
			curve: strokeCurve,
			width: strokeWidth
		},
		title: {
			text: titleText,
			align: titleAlign,
			style: {
				fontSize: titleFontSize,
				fontWeight: titleFontWeight
			}
		},
		grid: {
			show: grid,
			borderColor: gridBorderColor,
			row: {
				colors: [gridColor, 'transparent'], // takes an array which will be repeated on columns
				opacity: gridOpacity
			}
		},
		markers: {
			size: markerSize,
			strokeColors: markerStrokeColors,
			strokeWidth: markerStrokeWidth,
			strokeOpacity: markerStrokeOpacity
		},
		xaxis: {
			show: xaxis,
			categories: xaxisCategories,
			title: {
				text: xaxisTitle
			},
			labels: {
				rotate: xaxisLablesRotate
			}
		},
		yaxis: {
			show: yaxis,
			title: {
				text: yaxisTitle
			},
			min: yaxisMin,
			max: yaxisMax
		},
		legend: {
			show: legend,
			position: legendPosition,
			horizontalAlign: legendHorizontalAlign,
			floating: false,
			offsetY: -25,
			offsetX: -5
		}
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		// @ts-ignore
		const chart = new ApexCharts(id, options);
		chart.render();
	});
	let id;
</script>

<div bind:this={id} class="rounbded-b-4" />
