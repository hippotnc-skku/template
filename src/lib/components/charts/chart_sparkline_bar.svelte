<script lang="ts">
	export let datas = [{ name: '예시', data: [55, 22, 11, 30, 43, 27, 51] }];
	export let titles = '';
	export let tooltipSuffix = '';

	var optionsSparkLineBar = {
		colors: ['#10b981'],
		series: datas,
		chart: {
			fontFamily: 'inherit',
			type: 'bar',
			height: 120,
			zoom: {
				enabled: false
			},
			toolbar: {
				show: false
			},
			sparkline: {
				enabled: true
			}
		},
		plotOptions: {
			bar: {
				columnWidth: '40%',
				borderRadius: 4
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 0,
			color: 'transparent'
		},
		title: {
			text: titles
		},
		xaxis: {
			type: 'category'
		},
		yaxis: {
			opposite: true
		},
		tooltip: {
			shared: true,
			intersect: false,
			y: {
				// @ts-ignore
				formatter: function (val) {
					return (
						val.toLocaleString('ko-KR') +
						'<span class="fw-normal text-body-secondary">' +
						tooltipSuffix +
						'</span>'
					);
				}
			}
		}
	};
</script>
