<script>
	import '$lib/assets/css/full-calendar.css';
	import FullCalendar from '$lib/assets/js/plugins/fullcalendar.min';
	import { fixLength } from '$lib/api/function.js';
	import { onMount } from 'svelte';
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import SetupFrame from '$lib/codeboxframe/SetupFrame.svelte';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import CodeBox from '$lib/codeboxframe/CodeBox.svelte';

	let today = new Date().getFullYear().toString() + '-' + fixLength(new Date().getMonth() + 1);
	let calendar;
	let fc;
	let cal;
	let start = 9;
	let end = 18;
	onMount(() => {
		fc = FullCalendar;
		rending();
	});

	const rending = () => {
		calendar = new fc.Calendar(cal, {
			locale: 'kr',
			contentHeight: 'auto',
			initialView: 'dayGridMonth',
			headerToolbar: {
				start: 'title',
				center: '',
				end: 'prev,next'
			},
			selectable: false,
			editable: false,
			allDaySlot: false,
			dayHeaderFormat: { weekday: 'short' },
			initialDate: today,
			slotMinTime: `${fixLength(start)}:00:00`,
			slotMaxTime: `${fixLength(end)}:00:00`,
			slotDuration: '01:00:00',
			dayMaxEvents: 0, // for all non-TimeGrid views
			moreLinkContent: function (args) {
				return ' 예약 ' + args.num + ' 명';
			},
			eventClick: (info) => {
				console.log(info);
			},
			dateClick: (info) => {
				console.log(info);
			},
			slotLabelFormat: [{ hour: 'numeric' }],
			views: {
				month: {
					titleFormat: {
						month: 'long',
						year: 'numeric'
					}
				}
			}
		});

		calendar.render();
	};
</script>

<HippoWhiteFrame class="text-center py-5 w-full space-y-1">
	<div class="text-lg font-bold">자세한 사항은 fullcalendar를 참고하시면 됩니다.</div>

	<a
		href="https://fullcalendar.io/"
		target="_blank"
		class="text-blue-500 underline underline-offset-[5px]">https://fullcalendar.io/</a
	>
</HippoWhiteFrame>

<div class="h-full" data-toggle="calendar" id="calendar" bind:this={cal} />
