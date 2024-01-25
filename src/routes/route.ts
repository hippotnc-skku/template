import type { RouteItem } from '$lib/interface/templateInterface';

export const routes: RouteItem[] = [
	{
		title: '버튼',
		link: '/button',
		icon: 'fa-solid fa-screwdriver-wrench'
	},
	{
		title: '셀렉트',
		link: '/select',
		icon: 'fa-solid fa-screwdriver-wrench'
	},
	{
		title: '인풋',
		link: '/input',
		icon: 'fa-solid fa-screwdriver-wrench'
	},
	{
		title: '체크박스',
		link: '/checkbox',
		icon: 'fa-solid fa-screwdriver-wrench'
	},
	{
		title: '페이지네이션',
		link: '/pagination',
		icon: 'fa-solid fa-screwdriver-wrench'
	},
	{
		title: '컴포넌트프레임',
		link: '/component_frame',
		icon: 'fa-solid fa-screwdriver-wrench'
	},
	{
		title: '테이블',
		link: '/table',
		icon: 'fa-solid fa-screwdriver-wrench'
	},
	{
		title: '검색헤더',
		link: '/searchheader',
		icon: 'fa-solid fa-screwdriver-wrench'
	},
	{
		title: '탭',
		link: '/tabs',
		icon: 'fa-solid fa-screwdriver-wrench'
	},
	{
		title: '모달',
		link: '/modal',
		icon: 'fa-solid fa-screwdriver-wrench'
	},
	{
		title: '캘린더',
		link: '/calendar',
		icon: 'fa-solid fa-screwdriver-wrench'
	},
	{
		title: '날짜고르기창',
		link: '/datepicker',
		icon: 'fa-solid fa-screwdriver-wrench'
	},
	{
		title: '로그인폼',
		link: '/loginform',
		icon: 'fa-solid fa-screwdriver-wrench'
	},
	{
		title: '아이디 찾기 폼',
		link: '/findIdform',
		icon: 'fa-solid fa-screwdriver-wrench'
	},
	{
		title: '비밀번호 초기화 폼',
		link: '/resetpasswordform',
		icon: 'fa-solid fa-screwdriver-wrench'
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
				title: 'Play Log',
				link: '/chart/playlog',
				icon: 'fa-solid fa-chart-line'
			}
		]
	}
];
