<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import HippoButton from '$lib/components/hippocomponent/button/HippoButton.svelte';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import { List, Li, Heading } from 'flowbite-svelte';
	import ChartCard from '$lib/components/charts/template/chart_card.svelte';
	import ChartPlaylog from '$lib/components/charts/template/chart_playlog.svelte';

	let title = 'CogMoTest 플레이 로그';

	let logs = [
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '101',
			log_message: '미션 도중 게임 종료',
			inserted_at: '2024-01-01 11:57'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '202',
			log_message: '중간에 종료된 미션 다시 시작',
			inserted_at: '2024-01-01 11:57'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '101',
			log_message: '미션 도중 게임 종료',
			inserted_at: '2024-01-02 11:57'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '202',
			log_message: '중간에 종료된 미션 다시 시작',
			inserted_at: '2024-01-03 11:57'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '101',
			log_message: '미션 도중 게임 종료',
			inserted_at: '2024-01-03 11:57'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '202',
			log_message: '중간에 종료된 미션 다시 시작',
			inserted_at: '2024-01-04 11:57'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '202',
			log_message: '중간에 종료된 미션 다시 시작',
			inserted_at: '2024-01-04 11:57'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '101',
			log_message: '미션 도중 게임 종료',
			inserted_at: '2024-01-05 11:57'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '202',
			log_message: '중간에 종료된 미션 다시 시작',
			inserted_at: '2024-01-06 11:57'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '101',
			log_message: '미션 도중 게임 종료',
			inserted_at: '2024-01-07 11:57'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '202',
			log_message: '중간에 종료된 미션 다시 시작',
			inserted_at: '2024-01-08 11:57'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '101',
			log_message: '미션 도중 게임 종료',
			inserted_at: '2024-01-09 11:57'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '202',
			log_message: '중간에 종료된 미션 다시 시작',
			inserted_at: '2024-01-10 11:57'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '101',
			log_message: '미션 도중 게임 종료',
			inserted_at: '2024-01-11 11:57'
		},
		{
			family_id: 1,
			manager_id: 2,
			service_type: 7960,
			user_id: 100,
			job_id: 'qwe12e-12r12f',
			status: '1003',
			log_code: '202',
			log_message: '중간에 종료된 미션 다시 시작',
			inserted_at: '2024-01-12 11:57'
		}
	];
</script>

<CodeExampleFrame name="sample">
	<div class="flex justify-center gap-5 h-[500px]">
		<div class="overflow-auto">
			<ChartPlaylog {title} {logs} />
		</div>
	</div>
</CodeExampleFrame>
