// 임시 데이터 및 그래프들
let radarDataTitle = ['주의력', '작업기억력', '집행기능', '행동조절', '사회성', '충동조절'];
let radarData = [];

// AttnkareD 차트 옵션

export function setRadarA(array) {
	radarData = array;
	let highChartOptionofAttnkareD = {
		chart: {
			renderTo: 'container',
			polar: true,
			type: 'area'
		},

		title: false,
		subtitle: false,
		legend: false,

		pane: {
			size: '70%'
		},

		xAxis: {
			categories: [
				'<span style="color:#404040; font-size:16px; font-weight:500;">' +
					radarDataTitle[0] +
					'</span><br><span style="font-size:20px;color:#002d84; font-weight:700;">' +
					radarData[0] +
					'</span>',
				'<span style="color:#404040; font-size:16px; font-weight:500;">' +
					radarDataTitle[1] +
					'</span><br><span style="font-size:20px;color:#002d84; font-weight:700;">&nbsp&nbsp' +
					radarData[1] +
					'</span>',
				'<span style="color:#404040; font-size:16px; font-weight:500;">' +
					radarDataTitle[2] +
					'</span><br><span style="font-size:20px;color:#002d84; font-weight:700;">&nbsp&nbsp' +
					radarData[2] +
					'</span>',
				'<span style="opacity:0;">2</span><br><span style="color:#404040; font-size:16px; font-weight:500;">' +
					radarDataTitle[3] +
					'</span><br><span style="font-size:20px;color:#002d84; font-weight:700;">' +
					radarData[3] +
					'</span>',
				'<span style="color:#404040; font-size:16px; font-weight:500;">' +
					radarDataTitle[4] +
					'</span><br><span style="font-size:20px;color:#002d84; font-weight:700;">&nbsp&nbsp' +
					radarData[4] +
					'</span>',
				'<span style="color:#404040; font-size:16px; font-weight:500;">' +
					radarDataTitle[5] +
					'</span>&nbsp<br><span style="font-size:20px;color:#002d84; font-weight:700;">' +
					radarData[5] +
					'&nbsp&nbsp</span>'
			],

			tickmarkPlacement: 'on',
			lineWidth: 0,
			labels: {
				distance: 30
			}
		},

		yAxis: {
			gridLineInterpolation: 'polygon',
			lineWidth: 0,
			min: 0,
			max: 100,
			tickInterval: 20
		},

		series: [
			{
				enableMouseTracking: false,
				data: radarData,
				pointPlacement: 'on',
				marker: {
					radius: 1
				}
			}
		],

		credits: {
			enabled: false
		}
	};
	return highChartOptionofAttnkareD;
}
