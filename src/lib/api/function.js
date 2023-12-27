import moment from 'moment-timezone';
export const fixLength = (str) => (str > 9 ? str : `0${str}`);
export function formatDate(date) {
	const dateData = moment.tz(date, 'Asia/Seoul');
	return dateData.format('YYYY-MM-DD');
}

export const formatDateWHTime = (date) =>
	moment.tz(date, 'Asia/Seoul').format('YYYY년 MM월 D일 HH시 MM분');

export const formatDateKr = (date) => moment.tz(date, 'Asia/Seoul').format('YYYY년 M월 D일');
export const formatDateKrBrief = (date) => moment.tz(date, 'Asia/Seoul').format('YYYY/MM/DD');
export const formatDateKrHyphen = (date) => moment.tz(date, 'Asia/Seoul').format('YY-MM-DD');
export const formatDateKrDot = (date) => moment.tz(date, 'Asia/Seoul').format('YY.MM.DD');

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

export function inputPhoneNumber(phone) {
	let number = phone.replace(/[^0-9]/g, '');
	let tel = '';
	let seoul = number.substring(0, 2).indexOf('02') == 0 ? 1 : 0;

	if (number.length < 4 - seoul) return number;
	else if (number.length < 7 - seoul)
		tel += `${number.substr(0, 3 - seoul)}-${number.substr(3 - seoul)}`;
	else if (number.length < 11 - seoul)
		tel += `${number.substr(0, 3 - seoul)}-${number.substr(3 - seoul, 3)}-${number.substr(
			6 - seoul
		)}`;
	else
		tel += `${number.substr(0, 3 - seoul)}-${number.substr(3 - seoul, 4)}-${number.substr(
			7 - seoul
		)}`;

	return tel;
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
