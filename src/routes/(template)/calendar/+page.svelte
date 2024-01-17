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

<SetupFrame id="script">
	<pre id="script"><code
			><span class="import-from">import</span> '$lib/assets/css/full-calendar.css';
<span class="import-from">import</span> FullCalendar <span class="import-from">from</span
			> '$lib/assets/js/plugins/fullcalendar.min';
<span class="import-from">import</span> &#123 fixLength &#125 <span class="import-from">from</span
			> '$lib/api/function.js';
<span class="import-from">import</span> &#123 onMount &#125 <span class="import-from">from</span
			> 'svelte';
    
let today = new Date().getFullYear().toString() + '-' + fixLength(new Date().getMonth() + 1);
let calendar;
let fc;
let cal;
let start = 9;
let end = 18;
onMount(() =&gt &#123
  fc = FullCalendar;
  rending();
&#125);
    
const rending = () =&gt &#123
  calendar = new fc.Calendar(cal, &#123
    locale: 'kr',
    contentHeight: 'auto',
    initialView: 'dayGridMonth',
    headerToolbar: &#123
      start: 'title',
      center: '',
      end: 'prev,next'
    &#125,
    selectable: false,
    editable: false,
    allDaySlot: false,
    dayHeaderFormat: &#123 weekday: 'short' &#125,
    initialDate: today,
    slotMinTime: `$&#123ixLength(start)&#125:00:00`,
    slotMaxTime: `$&#123fixLength(end)&#125:00:00`,
    slotDuration: '01:00:00',
    dayMaxEvents: 0, // for all non-TimeGrid views
    moreLinkContent: function (args) &#123
      return ' 예약 ' + args.num + ' 명';
    &#125,
    eventClick: (info) =&gt &#123
      console.log(info);
    &#125,
    dateClick: (info) =&gt &#123
      console.log(info);
    &#125,
    slotLabelFormat: [&#123 hour: 'numeric' &#125],
    views: &#123
      month: &#123
        titleFormat: &#123
          month: 'long',
          year: 'numeric'
        &#125
      &#125
    &#125
  &#125);

  calendar.render();
&#125;</code
		></pre>
</SetupFrame>

<CodeExampleFrame>
	<HippoWhiteFrame class="px-8 py-10">
		<div class="h-full" data-toggle="calendar" id="calendar" bind:this={cal} />
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox class="mt-10" id="calendarcode">
	<pre id="calendarcode"><code
			>&ltdiv class="h-full" data-toggle="calendar" id="calendar" bind:this=&#123cal&#125 /&gt</code
		></pre>
</CodeBox>
