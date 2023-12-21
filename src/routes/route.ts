interface RouteItem {
	title: string;
	link?: string;
	icon: string;
	items?: RouteItem[];
}

export const routes: RouteItem[] = [
	{
		title: '버튼',
		link: '/button',
		icon: 'fa-solid fa-address-book'
	},
	{
		title: '셀렉트',
		link: '/select',
		icon: 'fa-solid fa-address-card'
	},
	{
		title: '인풋',
		link: '/input',
		icon: 'fa-regular fa-calendar-days'
	},
	{
		title: '체크박스',
		link: '/checkbox',
		icon: 'fa fa-cog'
	},
	{
		title: '페이지네이션',
		link: '/pagination',
		icon: 'fa-solid fa-clock-rotate-left'
	},
	{
		title: '컴포넌트프레임',
		link: '/component_frame',
		icon: 'fa-solid fa-wallet'
	},
	{
		title: '테이블',
		link: '/table',
		icon: 'fa-solid fa-bullhorn'
	},
	{
		title: '검색헤더',
		link: '/searchheader',
		icon: 'fa-solid fa-bullhorn'
	},
	{
		title: 'CRU 프레임',
		icon: 'fa-solid fa-question',
		items: [
			{
				title: '생성프레임',
				link: '/cru/create',
				icon: 'fa-solid fa-stethoscope'
			},
			{
				title: '조회프레임',
				link: '/cru/read',
				icon: 'fa-solid fa-list'
			},
			{
				title: '조회상세프레임',
				link: '/cru/read-detail',
				icon: 'fa-solid fa-list'
			},
			{
				title: '갱신프레임',
				link: '/cru/update',
				icon: 'fa-solid fa-list'
			}
		]
	}
];
