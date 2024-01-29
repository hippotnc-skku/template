import type { RouteItem } from '$lib/interface/templateInterface';

export const routes: RouteItem[] = [
	{
		title: 'Components',
		icon: 'fa-solid fa-screwdriver-wrench',
		items: [
			{
				title: 'Button',
				link: '/button',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: 'Select',
				link: '/select',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: 'Pagination',
				link: '/pagination',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: 'Component Frame',
				link: '/component_frame',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: 'Table',
				link: '/table',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: 'Search Header',
				link: '/searchheader',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: 'Tab',
				link: '/tabs',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: 'Modal',
				link: '/modal',
				icon: 'fa-solid fa-screwdriver-wrench'
			}
		]
	},
	{
		title: 'Inputs/Forms',
		icon: 'fa-solid fa-screwdriver-wrench',
		items: [
			{
				title: 'Input',
				link: '/input',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: 'Checkbox',
				link: '/checkbox',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: 'Login Form',
				link: '/loginform',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: 'ID Search Form',
				link: '/findIdform',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: 'PW Init Form',
				link: '/resetpasswordform',
				icon: 'fa-solid fa-screwdriver-wrench'
			}
		]
	},
	{
		title: 'Calendar',
		icon: 'fa-solid fa-screwdriver-wrench',
		items: [
			{
				title: 'Calendar',
				link: '/calendar',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: 'Date Picker',
				link: '/datepicker',
				icon: 'fa-solid fa-screwdriver-wrench'
			}
		]
	},
	{
		title: '게시판',
		icon: 'fa-solid fa-screwdriver-wrench',
		items: [
			{
				title: '생성 게시판1',
				link: '/cru/create',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: '생성 게시판2',
				link: '/cru/create-two',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: '목록 게시판',
				link: '/cru/read',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: '상세 조회 게시판 1',
				link: '/cru/detail-readone',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: '상세 조회 게시판 2',
				link: '/cru/detail-readtwo',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: '상세 조회 게시판 3',
				link: '/cru/detail-readthree',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: '상세 조회 게시판 4',
				link: '/cru/detail-readfour',
				icon: 'fa-solid fa-screwdriver-wrench'
			},
			{
				title: '갱신 게시판',
				link: '/cru/update',
				icon: 'fa-solid fa-screwdriver-wrench'
			}
		]
	},
	{
		title: 'Charts',
		icon: 'fa-solid fa-chart-simple',
		items: [
			{
				title: 'Card',
				link: '/chart/card',
				icon: 'fa-solid fa-chart-line'
			},
			{
				title: 'Line Chart(Hand Made)',
				link: '/chart/line',
				icon: 'fa-solid fa-chart-line'
			},
			{
				title: 'Double Line Chart',
				link: '/chart/doubleline',
				icon: 'fa-solid fa-chart-line'
			},
			{
				title: 'Triple Line Chart',
				link: '/chart/tripleline',
				icon: 'fa-solid fa-chart-line'
			},
			{
				title: 'Sparkline-Line Chart',
				link: '/chart/sparkline-line',
				icon: 'fa-solid fa-chart-line'
			},
			{
				title: 'Sparkline-Area Chart',
				link: '/chart/sparkline-area',
				icon: 'fa-solid fa-chart-line'
			},
			{
				title: 'Sparkline-Bar Chart',
				link: '/chart/sparkline-bar',
				icon: 'fa-solid fa-chart-line'
			},
			{
				title: 'HighChart RadarChart',
				link: '/chart/highchart-radarchart',
				icon: 'fa-solid fa-chart-line'
			},
			{
				title: 'Play Log',
				link: '/chart/playlog',
				icon: 'fa-solid fa-chart-line'
			}
		]
	}
];
