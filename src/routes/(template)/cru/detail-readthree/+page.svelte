<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import { HippoWhiteFrame } from '$lib/components/hippocomponent';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';

	let must = {
		name: '이름',
		registration_name: '상호명',
		phonenum: '센터 전화',
		mobile: '핸드폰 번호',
		registration_number: '사업자등록번호',
		business_type: '업태',
		business_item: '종목',
		postal_code: '우편번호',
		sigungu: '시/군/구',
		street: '도로',
		address: '상세 주소'
	};

	let optional = {
		country: '국가',
		intercom: '내선 번호',
		fax: '팩스 번호',
		branch_code: '지사코드',
		employee_code: '사원코드',
		area_code: '지역코드',
		product_code: '상품코드',
		registration_code: '서비스',
		description: '패밀리 설명'
	};

	let info = {
		name: '예시',
		registration_name: '예시',
		phonenum: '02-111-1111',
		intercom: '36',
		fax: '02-111-1111',
		mobile: '010-1111-1111',
		registration_number: '11-11111-11',
		registration_code: 7960,
		country: '대한민국',
		postal_code: '88888',
		sigungu: '히포시',
		street: '히포로',
		address: '히포빌딩',
		business_type: '업태 예시',
		business_item: '종목 예시',
		branch_code: '11',
		employee_code: '228-18',
		area_code: '81',
		product_code: '2222',
		description: '나라의 말이 중국과 달라 문자와 서로 통하지 아니하기에'
	};
</script>

<CodeExampleFrame name="Sample">
	<HippoWhiteFrame class="px-7 py-6">
		<div class="container">
			<Accordion flush>
				<AccordionItem open>
					<span slot="header">필수</span>
					<div class="mt-2 w-full space-y-4 grid gap-6 mb-6 md:grid-cols-2">
						{#each Object.entries(must) as [key, value]}
							<div class="space-y-0.5">
								<div class="text-md font-bold">{value}</div>
								<span class="inline-block font-semibold text-hippNavy">{info[key]}</span>
							</div>
						{/each}
					</div>
				</AccordionItem>
				<AccordionItem>
					<span slot="header">선택</span>
					<div class="mt-2 w-full space-y-4 grid gap-6 mb-6 md:grid-cols-2">
						{#each Object.entries(optional) as [key, value]}
							<div class="space-y-0.5">
								<div class="text-md font-bold">{value}</div>
								<span class="inline-block font-semibold text-hippNavy">{info[key]}</span>
							</div>
						{/each}
					</div>
				</AccordionItem>
			</Accordion>
		</div>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="Code">
	<iframe
		title="default"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:1762px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fcru%2Fdetail-readthree%2F_temp.svelte%3Fts%3D4%23L1-L82&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>
