<script>
	import '$lib/assets/css/full-calendar.css';
	import FullCalendar from '$lib/assets/js/plugins/fullcalendar.min';
	import { fixLength } from '$lib/api/function.js';
	import { onMount } from 'svelte';
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';

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

<CodeExampleFrame name="Setup">
	<iframe
		title="setup"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:1363px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fcalendar%2F_temp.svelte%3Fts%3D4%23L1-L63&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>

<CodeExampleFrame>
	<HippoWhiteFrame class="px-8 py-10">
		<div class="h-full" data-toggle="calendar" id="calendar" bind:this={cal} />
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame>
	<iframe
		title="calendar"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:61px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fcalendar%2F_temp.svelte%3Fts%3D4%23L75&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>
