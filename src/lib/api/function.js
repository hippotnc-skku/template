import moment from 'moment-timezone';

export const serviceObject = {
	7960: 'CogMoTest',
	7970: 'CogMoUp',
	9960: 'WithBuddy'
};

export const userObject = {
	2: '패밀리',
	3: '유저'
};

export const publishList = [
	{ value: 7960, name: 'CogMoTest' },
	{ value: 7970, name: 'CogMoUp' },
	{ value: 9960, name: 'WithBuddy' }
];

export const userList = [
	{ value: 2, name: '패밀리' },
	{ value: 3, name: '유저' }
];

export function level(point) {
	if (point >= 0 && point < 1) return 'Classic';
	else if (point >= 1 && point < 2) return 'Master';
	else if (point >= 2 && point < 3) return 'Noble';
	else if (point >= 4) return 'Royal';
	else return '체크 필요';
}
export const fixLength = (str) => (str > 9 ? str : `0${str}`);
export function formatDate(date) {
	const dateData = moment.tz(date, 'Asia/Seoul');
	return dateData.format('YYYY-MM-DD');
}

export function formatDateForAWS(date) {
	const dateData = moment.tz(date, 'Asia/Seoul');
	return dateData.format('YYYY_MM_DD');
}

export function formatDateYearMonth(date) {
	const dateData = moment.tz(date, 'Asia/Seoul');
	return dateData.format('YYYY-MM');
}

export function formatDateKr(date, time = false) {
	const d = new Date(date);
	return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일(${
		locale.weekdays[d.getDay()]
	})${time ? ` ${fixLength(d.getHours())}시 ${fixLength(d.getMinutes())}분` : ''}`;
}

export function formatYearMonth(date) {
	const d = new Date(date);
	let month = '';
	if (d.getMonth() + 1 < 10) {
		month = '0' + (d.getMonth() + 1).toString();
	} else {
		month = (d.getMonth() + 1).toString();
	}
	return `${d.getFullYear()}-${month}`;
}

export const formatDateTimeAbbreviation = (date) =>
	moment.tz(date, 'Asia/Seoul').format('YY/MM/DD HH:MM');

export const timeCompare = (str1, str2) => {
	const time1 = moment(`1970-01-01 ${str1}`);
	const time2 = moment(`1970-01-01 ${str2}`);
	return time2.diff(time1) >= 0;
};
export const dateCompare = (str1, str2) => {
	const time1 = moment(str1);
	const time2 = moment(str2);
	return time2.diff(time1) > 0;
};
export const locale = {
	weekdays: ['일', '월', '화', '수', '목', '금', '토'],
	months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	weekStartsOn: 0
};

export function getAge(birthDate) {
	let birthMoment = moment(new Date(birthDate));
	return moment().diff(birthMoment, 'years');
}

export function autoAddHyphen(event) {
	const input = event.target;
	let value = input.value;

	if (value.length > 13) {
		value = value.substring(0, 13);
	}
	const numbers = value.replace(/[^0-9]/g, '');
	const formattedValue =
		numbers.length === 9
			? numbers.replace(/(\d{2})(\d{3})(\d{4})/g, '$1-$2-$3')
			: numbers.length === 10 && numbers[0] === '0' && numbers[1] === '2'
			? numbers.replace(/(\d{2})(\d{4})(\d{4})/g, '$1-$2-$3')
			: numbers.length === 10
			? numbers.replace(/(\d{3})(\d{3})(\d{4})/g, '$1-$2-$3')
			: numbers.length === 11
			? numbers.replace(/(\d{3})(\d{4})(\d{4})/g, '$1-$2-$3')
			: numbers;

	return formattedValue;
}

export function inputPhoneNumber(phone) {
	let number = phone.replace(/[^0-9]/g, '');
	let tel = '';
	let seoul = 0;
	if (number.substring(0, 2).indexOf('02') == 0) {
		seoul = 1;
	}
	if (number.length < 4 - seoul) {
		return number;
	} else if (number.length < 7 - seoul) {
		tel += number.substr(0, 3 - seoul);
		tel += '-';
		tel += number.substr(3 - seoul);
	} else if (number.length < 11 - seoul) {
		tel += number.substr(0, 3 - seoul);
		tel += '-';
		tel += number.substr(3 - seoul, 3);
		tel += '-';
		tel += number.substr(6 - seoul);
	} else {
		tel += number.substr(0, 3 - seoul);
		tel += '-';
		tel += number.substr(3 - seoul, 4);
		tel += '-';
		tel += number.substr(7 - seoul);
	}
	phone = tel;
	return phone;
}
export const generateRandomString = (num) => {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	let result = '';
	const charactersLength = characters.length;
	for (let i = 0; i < num; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;
};

export const cookieOptions = {
	httpOnly: true,
	path: '/',
	secure: false,
	maxAge: 5 * 60 * 60
};

export const deleteCookieOptions = {
	httpOnly: true,
	path: '/',
	secure: false,
	maxAge: 0
};

export function changeToName(list, number) {
	let selectedObject = {};
	switch (number) {
		case 1:
			selectedObject = serviceObject;
			break;
		case 2:
			selectedObject = userObject;
			break;
	}
	let tempList = [];
	list.forEach((p) => {
		tempList.push(selectedObject[p]);
	});
	if (
		tempList.length === 0 ||
		tempList.length === Object.keys(selectedObject).length ||
		list.includes(0)
	) {
		return `전체 공지`;
	} else {
		return `${tempList.join('\n')}`;
	}
}

export function checkboxChange(checkboxList, v) {
	if (checkboxList.includes(v)) {
		checkboxList = checkboxList.filter((value) => value != v);
	} else {
		checkboxList.push(v);
	}
	return checkboxList;
}

export function getSevenDaysFromToday() {
	let sevendays = [];
	for (let i = 0; i < 7; i++) {
		let minusday = moment().tz('Asia/Seoul').subtract(i, 'days');
		sevendays = [minusday.get('month') + 1 + '월 ' + minusday.get('date') + '일', ...sevendays];
	}
	return sevendays;
}

export function getSevenWeeksFromToday() {
	let sevenweeks = [];
	for (let i = 0; i < 7; i++) {
		let minusday1 = moment()
			.tz('Asia/Seoul')
			.subtract(i * 7, 'days');
		let minusday2 = moment()
			.tz('Asia/Seoul')
			.subtract(i * 7 + 6, 'days');
		sevenweeks = [
			minusday2.get('month') +
				1 +
				'/' +
				minusday2.get('date') +
				' ~ ' +
				(minusday1.get('month') + 1 + '/' + minusday1.get('date')),
			...sevenweeks
		];
	}
	return sevenweeks;
}

export function getSevenMonthFromToday() {
	let sevenMonths = [];
	for (let i = 0; i < 7; i++) {
		let minusMonth = moment().tz('Asia/Seoul').subtract(i, 'month');
		sevenMonths = [minusMonth.get('month') + 1 + '월', ...sevenMonths];
	}
	return sevenMonths;
}

export const duration = {
	0: 'day',
	1: 'week',
	2: 'month',
	3: 'year'
};
