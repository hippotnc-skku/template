<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import ChartLine from '$lib/components/charts/template/chart_simple_line.svelte';

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

<HippoWhiteFrame class="p-2 my-2">
	<ChartLine
		{series}
		{chartHeight}
		{dataLabels}
		{strokeCurve}
		{strokeWidth}
		{titleText}
		{titleAlign}
		{titleFontSize}
		{titleFontWeight}
		{grid}
		{gridColor}
		{gridBorderColor}
		{gridOpacity}
		{xaxis}
		{xaxisCategories}
		{xaxisTitle}
		{xaxisLablesRotate}
		{yaxis}
		{yaxisTitle}
		{yaxisMin}
		{yaxisMax}
		{dropShadow}
		{toolbar}
		{markerSize}
		{markerStrokeColors}
		{markerStrokeWidth}
		{markerStrokeOpacity}
		{legend}
		{legendPosition}
		{legendHorizontalAlign}
		{lineColors}
	/>
</HippoWhiteFrame>


let series = [
	{
			name: name,
			data: data
	}
];