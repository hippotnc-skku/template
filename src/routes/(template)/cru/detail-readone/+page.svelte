<script>
	import { HippoWhiteFrame, HippoButton } from '$lib/components/hippocomponent';
	import { formatDateKr } from '$lib/api/function.js';
	import { HippoSort } from '$lib/components/hippocomponent';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from '$lib/components/helpers';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import InfoHead from './InfoHead.svelte';
	import SetupFrame from '$lib/codeboxframe/SetupFrame.svelte';
	import CodeBox from '$lib/codeboxframe/CodeBox.svelte';

	const tableHeader = [
		{ name: '할인율', sort: false },
		{ name: '할인 이름', sort: false },
		{ name: '할인 조건', sort: false }
	];

	export let data;

	const service = {
		id: 1,
		addr: 'http://127.0.0.1:4007',
		service_name: 'HippBrainUp',
		service_type: 7970,
		app_key: 'ab4ed8b0-8159-4f7f-9ee4-6240db76f4e0',
		description: '힙브레인은 아동에게 효과적인 VR치료 서비스입니다.',
		fare: 5000,
		inserted_at: '2024-01-01',
		updated_at: '2024-01-01',
		discounts: [
			{
				percent: 50,
				name: '테스트',
				condition: ''
			}
		]
	};

	const serviceInfo = {
		id: '서비스 ID',
		service_type: '서비스 타입',
		description: '서비스 설명',
		app_key: 'App_Key',
		fare: '요금(원)',
		inserted_at: '생성일',
		updated_at: '최근 수정일',
		addr: '서비스 주소'
	};

	function firstClick() {
		console.log('첫번째');
	}

	function secondClick() {
		console.log('두번째');
	}
</script>

<SetupFrame id="scripthead">
	<pre id="scripthead"><code
			>&ltscript&gt
	import &#123 formatDateKr &#125 from '$lib/api/function.js';
	import &#123 HippoInput, HippoButton &#125 from '$lib/components/hippocomponent';

	const family = &#123
		id: 1,
		name: '수원 SKKU 정신건강센터',
		registration_name: '(주)SKKU',
		registration_number: '300-10-11011',
		registration_code: 1101,
		phonenum: '032-813-2801',
		country: 'rok',
		sigungu: 'gyeonggido',
		address: 'suwon',
		street: 'seoburo',
		postal_code: '16419',
		description: '대학내 멘탈케어센터',
		inserted_at: '2024-01-01',
		updated_at: '2024-01-01'
	&#125;

	let familyInfo = &#123
		id: '패밀리 ID',
		name: '패밀리명',
		phonenum: '전화번호',
		mobile: '핸드폰번호',
		address: '주소(우편번호)',
		registration_number: '사업자등록번호',
		inserted_at: '등록일',
		registration_name: '사업자명'
	&#125;

	function firstClick() &#123
		console.log('첫번째');
	&#125
&lt/script&gt
	</code></pre>
</SetupFrame>

<CodeExampleFrame name="Header에 정보를 넣을 경우">
	<HippoWhiteFrame class="px-7 py-6">
		<InfoHead />
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox class="mt-10" id="header">
	<pre id="header"><code>
		&ltdiv class="flex items-baseline mb-4 pb-2 border-b-2 justify-between"&gt
			&lth5 class="mb-0 font-bold px-3 items-baseline text-xl"&gt&#123family.name&#125&lt/h5&gt
			&ltdiv&gt
				&ltlabel class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name my-1"
					&gt&#123familyInfo.id&#125&lt/label
				&gt
				&ltspan class="mx-2"&gt&#123family['id']&#125&lt/span&gt
			&lt/div&gt
		&lt/div&gt
		&ltdiv class="grid lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-3"&gt
			&ltdiv&gt
				&ltlabel class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name my-1"
					&gt&#123familyInfo.name&#125&lt/label
				&gt
				&ltHippoInput value=&#123family['name']&#125 disabled=&#123true&#125 border="border-0" class="w-full" /&gt
			&lt/div&gt
			&ltdiv&gt
				&ltlabel class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name my-1"
					&gt&#123familyInfo.registration_name&#125&lt/label
				&gt
				&ltHippoInput
					value=&#123family['registration_name']&#125
					disabled=&#123true&#125
					border="border-0"
					class="w-full"
				/&gt
			&lt/div&gt
			&ltdiv&gt
				&ltlabel class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name my-1 ml-3"
					&gt&#123familyInfo.registration_number&#125&lt/label
				&gt
				&ltHippoInput
					value=&#123family['registration_number']&#125
					disabled=&#123true&#125
					border="border-0"
					class="w-full"
				/&gt
			&lt/div&gt
			&ltdiv&gt
				&ltlabel class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name my-1"
					&gt&#123familyInfo.inserted_at&#125&lt/label
				&gt
				&ltHippoInput
					value=&#123formatDateKr(family['inserted_at'])&#125
					disabled=&#123true&#125
					border="border-0"
					class="w-full"
				/&gt
			&lt/div&gt
			&ltdiv class="col-span-2"&gt
				&ltlabel class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name my-1"
					&gt&#123familyInfo.address&#125&lt/label
				&gt
				&ltHippoInput
					value=&#123family['sigungu'] +
						' ' +
						family['street'] +
						' ' +
						family['address'] +
						' (' +
						family['postal_code'] +
						')'&#125
					disabled=&#123true&#125
					border="border-0"
					class="w-full"
				/&gt
			&lt/div&gt
			&ltdiv&gt
				&ltlabel class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name my-1"
					&gt&#123familyInfo.phonenum&#125&lt/label
				&gt
				&ltHippoInput value=&#123family['phonenum']&#125 disabled=&#123true&#125 border="border-0" class="w-full" /&gt
			&lt/div&gt
			&ltdiv&gt
				&ltlabel class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name my-1"&gt
					&#123familyInfo.mobile&#125&lt/label
				&gt
				&ltHippoInput
					value=&#123!family['mobile'] ? '미등록' : family['mobile']&#125
					disabled=&#123true&#125
					border="border-0"
					class="w-full"
				/&gt
			&lt/div&gt
		&lt/div&gt
		
		&ltdiv class="flex justify-end"&gt
			&ltdiv class="pl-1 mt-5 space-x-3"&gt
				&ltHippoButton class="bg-[#39C261] text-white px-3 py-2" on:click=&#123firstClick&#125
					&gt패밀리 정보 수정
				&lt/HippoButton&gt
			&lt/div&gt
		&lt/div&gt
	</code></pre>
</CodeBox>

<SetupFrame id="scriptbetween">
	<pre id="scriptbetween"><code
			>&ltscript&gt
	import &#123 HippoButton, HippoSort &#125 from '$lib/components/hippocomponent';
	import &#123 formatDateKr &#125 from '$lib/api/function.js';
	import &#123
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	&#125 from '$lib/components/helpers';

	const tableHeader = [
		&#123 name: '할인율', sort: false &#125,
		&#123 name: '할인 이름', sort: false &#125,
		&#123 name: '할인 조건', sort: false &#125
	];

	export let data;

	const service = &#123
		id: 1,
		addr: 'http://127.0.0.1:4007',
		service_name: 'HippBrainUp',
		service_type: 7970,
		app_key: 'ab4ed8b0-8159-4f7f-9ee4-6240db76f4e0',
		description: '힙브레인은 아동에게 효과적인 VR치료 서비스입니다.',
		fare: 5000,
		inserted_at: '2024-01-01',
		updated_at: '2024-01-01',
		discounts: [
			&#123
				percent: 50,
				name: '테스트',
				condition: ''
			&#125
		]
	&#125;

	const serviceInfo = &#123
		id: '서비스 ID',
		service_type: '서비스 타입',
		description: '서비스 설명',
		app_key: 'App_Key',
		fare: '요금(원)',
		inserted_at: '생성일',
		updated_at: '최근 수정일',
		addr: '서비스 주소'
	&#125;

	function firstClick() &#123
		console.log('첫번째');
	&#125

	function secondClick() &#123
		console.log('두번째');
	&#125
&lt/script&gt</code
		></pre>
</SetupFrame>

<CodeExampleFrame name="양옆으로 나눈 경우">
	<div class="flex flex-col space-y-4 2xl:space-y-0 2xl:flex-row 2xl:justify-between mt-4 gap-x-3">
		<HippoWhiteFrame class="py-5 px-8 w-full 2xl:w-1/2">
			<div class="pb-2 font-bold text-xl border-b-2">
				{service.service_name}
			</div>
			<div class="mt-5 w-full space-y-5">
				{#each Object.entries(serviceInfo) as [key, value]}
					{#if ['inserted_at', 'updated_at'].includes(key)}
						<div class="space-y-0.5">
							<div class="text-md font-bold">{value}</div>
							<span class="inline-block font-semibold text-hippNavy"
								>{formatDateKr(service[key])}</span
							>
						</div>
					{:else}
						<div class="space-y-0.5">
							<div class="text-md font-bold">{value}</div>
							<span class="inline-block font-semibold text-hippNavy">{service[key]}</span>
						</div>
					{/if}
				{/each}
			</div>
		</HippoWhiteFrame>

		<HippoWhiteFrame class="py-5 px-8 w-full 2xl:w-1/2">
			<div class="font-bold text-xl pb-2 border-b-2">할인 목록</div>
			<Table hoverable="true">
				<TableHead>
					{#each tableHeader as th}
						{#if th.sort}
							<TableHeadCell textClass="text-[#303030] text-[13px] text-start">
								<HippoSort {data} key={th.key} title={th.name} />
							</TableHeadCell>
						{:else}
							<TableHeadCell textClass="text-[#303030] text-[13px] text-start"
								>{th.name}</TableHeadCell
							>
						{/if}
					{/each}
				</TableHead>
				<TableBody tableBodyClass="divide-y">
					<col width="40%" />
					<col width="30%" />
					<col width="30%" />
					{#each service?.discounts as discount}
						<TableBodyRow color="custom" class="cursor-default">
							<TableBodyCell>{discount.percent}%</TableBodyCell>
							<TableBodyCell>{discount.name}</TableBodyCell>
							<TableBodyCell>{discount.condition ? discount.condition : '없음'}</TableBodyCell>
						</TableBodyRow>
					{:else}
						<tr>
							<td colspan="12" class="text-center text-lg h-[50px]">적용된 할인이 없습니다.</td>
						</tr>
					{/each}
				</TableBody>
			</Table>
		</HippoWhiteFrame>
	</div>

	<div class="p-3 m-2 flex justify-center">
		<HippoButton class="bg-[#39C261] text-white px-5 py-3 mx-2" on:click={firstClick}
			>첫번째</HippoButton
		>
		<HippoButton class="bg-[#373838] text-white px-5 py-3 mx-2" on:click={secondClick}
			>두번째</HippoButton
		>
	</div>
</CodeExampleFrame>

<CodeBox class="mt-10" id="bodybetween">
	<pre id="bodybetween"><code
			>&ltdiv class="flex flex-col space-y-4 2xl:space-y-0 2xl:flex-row 2xl:justify-between mt-4 gap-x-3"&gt
	&ltHippoWhiteFrame class="py-5 px-8 w-full 2xl:w-1/2"&gt
		&ltdiv class="pb-2 font-bold text-xl border-b-2"&gt
			&#123service.service_name&#125
		&lt/div&gt
		&ltdiv class="mt-5 w-full space-y-5"&gt
			&#123#each Object.entries(serviceInfo) as [key, value]&#125
				&#123#if ['inserted_at', 'updated_at'].includes(key)&#125
					&ltdiv class="space-y-0.5"&gt
						&ltdiv class="text-md font-bold"&gt&#123value&#125&lt/div&gt
						&ltspan class="inline-block font-semibold text-hippNavy"
							&gt&#123formatDateKr(service[key])&#125&lt/span
						&gt
					&lt/div&gt
				&#123:else&#125
					&ltdiv class="space-y-0.5"&gt
						&ltdiv class="text-md font-bold"&gt&#123value&#125&lt/div&gt
						&ltspan class="inline-block font-semibold text-hippNavy"&gt&#123service[key]&#125&lt/span&gt
					&lt/div&gt
				&#123/if&#125
			&#123/each&#125
		&lt/div&gt
	&lt/HippoWhiteFrame&gt

	&ltHippoWhiteFrame class="py-5 px-8 w-full 2xl:w-1/2"&gt
		&ltdiv class="font-bold text-xl pb-2 border-b-2"&gt할인 목록&lt/div&gt
		&ltTable hoverable="true"&gt
			&ltTableHead&gt
				&#123#each tableHeader as th&#125
					&#123#if th.sort&#125
						&ltTableHeadCell textClass="text-[#303030] text-[13px] text-start"&gt
							&ltHippoSort &#123data&#125 key=&#123th.key&#125 title=&#123th.name&#125 /&gt
						&lt/TableHeadCell&gt
					&#123:else&#125
						&ltTableHeadCell textClass="text-[#303030] text-[13px] text-start"
							&gt&#123th.name&#125&lt/TableHeadCell
						&gt
					&#123/if&#125
				&#123/each&#125
			&lt/TableHead&gt
			&ltTableBody tableBodyClass="divide-y"&gt
				&ltcol width="40%" /&gt
				&ltcol width="30%" /&gt
				&ltcol width="30%" /&gt
				&#123#each service?.discounts as discount&#125
					&ltTableBodyRow color="custom" class="cursor-default"&gt
						&ltTableBodyCell&gt&#123discount.percent&#125%&lt/TableBodyCell&gt
						&ltTableBodyCell&gt&#123discount.name&#125&lt/TableBodyCell&gt
						&ltTableBodyCell&gt&#123discount.condition ? discount.condition : '없음'&#125&lt/TableBodyCell&gt
					&lt/TableBodyRow&gt
				&#123:else&#125
					&lttr&gt
						&lttd colspan="12" class="text-center text-lg h-[50px]"&gt적용된 할인이 없습니다.&lt/td&gt
					&lt/tr&gt
				&#123/each&#125
			&lt/TableBody&gt
		&lt/Table&gt
	&lt/HippoWhiteFrame&gt
&lt/div&gt

&ltdiv class="p-3 m-2 flex justify-center"&gt
	&ltHippoButton class="bg-[#39C261] text-white px-5 py-3 mx-2" on:click=&#123firstClick&#125
		&gt첫번째&lt/HippoButton&gt
	&ltHippoButton class="bg-[#373838] text-white px-5 py-3 mx-2" on:click=&#123secondClick&#125
		&gt두번째&lt/HippoButton&gt
&lt/div&gt</code
		></pre>
</CodeBox>
