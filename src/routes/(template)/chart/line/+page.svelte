<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import { HippoButton } from '$lib/components/hippocomponent';
	import { notifications } from '$lib/components/notification/notifications';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import SetupFrame from '$lib/codeboxframe/SetupFrame.svelte';
	import CodeBox from '$lib/codeboxframe/CodeBox.svelte';
	import Gist from '$lib/gist/Gist.svelte';
	import { List, Li, Heading } from 'flowbite-svelte';
	import ChartLine from '$lib/components/charts/template/chart_simple_line.svelte';

	let series = [
		{
			name: 'name',
			data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
		}
	];
	let chartHeight = 350;
	let dataLabels = false;
	let strokeCurve = 'straight';
	let strokeWidth = 5;
	let titleText = 'title';
	let titleAlign = 'left';
	let titleFontSize = '20px';
	let titleFontWeight = 'bold';
	let grid = true;
	let gridColor = '#f3f3f3';
	let gridBorderColor = '#90A4AE';
	let gridOpacity = 0.5;
	let xaxis = true;
	let xaxisCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
	let xaxisTitle = 'xaxis title';
	let xaxisLablesRotate = -45;
	let yaxis = true;
	let yaxisTitle = 'yaxis title';
	let yaxisMin = 0;
	let yaxisMax = 200;
	let dropShadow = true;
	let toolbar = true;
	let markerSize = 1;
	let markerStrokeColors = '#FFF';
	let markerStrokeWidth = 2;
	let markerStrokeOpacity = 0.9;
	let legend = true;
	let legendPosition = 'top';
	let legendHorizontalAlign = 'center';
	let lineColors = ['#77B6EA'];
</script>

<CodeExampleFrame name="Options">
	<HippoWhiteFrame class="p-5 flex flex-wrap gap-5">
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>series (필수)</Heading
		>
		<List tag="ul" class="w-full space-y-1 text-gray-500 dark:text-gray-400">
			<Li>차트에 표시될 데이터</Li>
			<Li>let series = [&#123 name : name, data : data &#125];</Li>
			<Li>name : string</Li>
			<Li>data : list</Li>
			<Li>여러 라인을 표시할 경우 series 리스트 안에 object 추가</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>chartHeight</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>차트 canvas의 높이</Li>
			<Li>chartHeight : number ( default : 350 )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>dataLabels</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>차트에 series의 각 값을 표시할 지 여부</Li>
			<Li>dataLabels : bool ( default : false )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>strokeCurve</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>line의 형태를 결정</Li>
			<Li
				>strokeCurve : string | array of strings ( 'straight', 'smooth', 'stepline') ( default :
				'straight' )</Li
			>
			<Li>series가 여러개일 경우 리스트로 각 line의 형태를 다르게 할 수 있음</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>strokeWidth</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>line의 두께를 결정</Li>
			<Li>strokeWidth : number | array of numbers ( default : 5 )</Li>
			<Li>series가 여러개일 경우 리스트로 각 line의 두께를 다르게 할 수 있음</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>titleText</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>차트의 타이틀</Li>
			<Li>titleText : string ( default : '' )</Li>
			<Li>미입력 시 타이틀 숨김</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>titleAlign</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>타이틀의 표시 위치</Li>
			<Li>titleAlign : string ( 'left', 'center', 'right' ) ( default : 'left' )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>titleFontSize</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>타이틀 폰트 사이즈</Li>
			<Li>titleFontSize : 'string' ( default : '14px' )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>titleFontWeight</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>타이틀 폰트 굵기</Li>
			<Li>titleFontSize : 'string' | number ( default : 'bold' )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>titleAlign</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>타이틀의 표시 위치</Li>
			<Li>titleAlign : string ( 'left', 'center', 'right' ) ( default : 'left' )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>grid</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>배경의 무늬 표시 여부</Li>
			<Li>grid : bool ( default : true )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>gridColor</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>background의 번갈아가면서 나오는 grid의 color를 지정</Li>
			<Li>gridColor : string ( default : '#f3f3f3' )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>gridBorderColor</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>background의 번갈아가면서 나오는 grid의 border color를 지정</Li>
			<Li>gridColor : string ( default : '#90A4AE' )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>gridOpacity</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>background의 번갈아가면서 나오는 grid color의 투명도 지정</Li>
			<Li>gridOpacity : number ( default : 0.5 )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>xaxis</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>x축 표시 여부</Li>
			<Li>xaxis : bool ( default : true )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>xaxisCategories ( x축 표시할 경우 필수 )</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>x축의 기준이 되는 레이블</Li>
			<Li>xaxisCategories : array</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>xaxisTitle</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>x축에 표시할 타이틀</Li>
			<Li>xaxisTitle : string ( default : '' )</Li>
			<Li>미입력시 타이틀 생략</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>xaxisLablesRotate</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>x축 레이블 회전 각도</Li>
			<Li>xaxisTitle : number ( default : -45 )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>yaxis</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>y축 표시 여부</Li>
			<Li>yaxis : bool ( default : true )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>yaxisTitle</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>y축에 표시할 타이틀</Li>
			<Li>yaxisTitle : string ( default : '' )</Li>
			<Li>미입력시 타이틀 생략</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>yaxisMin</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>y축 레이블의 최솟값</Li>
			<Li>yaxisMin : number | function ( default : series 값 중 최솟값 )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>yaxisMax</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>y축 레이블의 최댓값</Li>
			<Li>yaxisMax : number | function ( default : series 값 중 최댓값 )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>dropShadow</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>line에 그림자 표시 여부</Li>
			<Li>dropShadow : bool ( dafault : true )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>toolbar</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>우상단 toolbar 표시 여부</Li>
			<Li>toolbar : bool ( dafault : true )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>markerSize</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>series의 각 값 지점에 marker 표시 사이즈</Li>
			<Li>markerSize : number | array of numbers ( dafault : 1 )</Li>
			<Li>0일경우 미표시</Li>
			<Li>여러라인의 마커 사이즈를 각각 지정하고 싶은 경우 array에 각 값 입력</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>markerStrokeColors</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>marker의 테두리 색깔</Li>
			<Li>markerStrokeColors : string | array of strings ( dafault : '#FFF' )</Li>
			<Li>여러 라인의 테두리 색깔을 각각 지정하고 싶은 경우 array에 각 값 입력</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>markerStrokeWidth</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>marker의 테두리 두께</Li>
			<Li>markerStrokeWidth : number | array of number ( dafault : 2 )</Li>
			<Li>여러 라인의 테두리 두께를 각각 지정하고 싶은 경우 array에 각 값 입력</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>markerStrokeOpacity</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>marker의 테두리 투명도</Li>
			<Li>markerStrokeOpacity : number | array of number ( dafault : 0.9 )</Li>
			<Li>여러 라인의 테두리 투명도를 각각 지정하고 싶은 경우 array에 각 값 입력</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>legend</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>범례 표시 여부</Li>
			<Li>legend : true ( dafault : true )</Li>
			<Li>series가 한 개일 경우, legend가 true여도 표시되지 않음</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>legendPosition</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>범례 표시 위치</Li>
			<Li>legendPosition : string ('top', 'bottom', 'left', 'right' ) ( dafault : 'top' )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>legendHorizontalAlign</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>범례 정렬</Li>
			<Li>legendHorizontalAlign : string ( 'center', 'left', 'right' ) ( dafault : 'center' )</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>lineColors</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>라인의 색깔</Li>
			<Li>lineColors : string | array of strings ( dafault : '#77B6EA' )</Li>
			<Li>라인이 여러개일 경우 array에 각 라인의 색깔을 지정할 수 있음</Li>
		</List>
	</HippoWhiteFrame>
</CodeExampleFrame>
