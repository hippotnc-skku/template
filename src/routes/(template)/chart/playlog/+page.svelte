<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import HippoButton from '$lib/components/hippocomponent/button/HippoButton.svelte';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import { List, Li, Heading } from 'flowbite-svelte';
	import ChartCard from '$lib/components/charts/template/chart_card.svelte';
	import ChartPlaylog from '$lib/components/charts/template/chart_playlog.svelte';

	let title = 'CogMoTest 플레이 로그';

	const logs = [
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '101',
			log_message: '미션 도중 게임 종료'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '202',
			log_message: '중간에 종료된 미션 다시 시작'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '101',
			log_message: '미션 도중 게임 종료'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '202',
			log_message: '중간에 종료된 미션 다시 시작'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '101',
			log_message: '미션 도중 게임 종료'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '202',
			log_message: '중간에 종료된 미션 다시 시작'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '202',
			log_message: '중간에 종료된 미션 다시 시작'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '101',
			log_message: '미션 도중 게임 종료'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '202',
			log_message: '중간에 종료된 미션 다시 시작'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '101',
			log_message: '미션 도중 게임 종료'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '202',
			log_message: '중간에 종료된 미션 다시 시작'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '101',
			log_message: '미션 도중 게임 종료'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '202',
			log_message: '중간에 종료된 미션 다시 시작'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '101',
			log_message: '미션 도중 게임 종료'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '202',
			log_message: '중간에 종료된 미션 다시 시작'
		}
	];
</script>

<ChartPlaylog {title} />
