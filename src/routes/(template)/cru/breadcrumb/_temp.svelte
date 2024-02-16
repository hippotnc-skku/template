<script>
	import { HippoButton } from '$lib/components/hippocomponent';
	import { Breadcrumb, BreadcrumbItem } from '$lib/components/helpers';
</script>

<div class="flex justify-between mb-2">
	<Breadcrumb aria-label="Default breadcrumb example" class="flex items-center">
		<BreadcrumbItem href="#" home>홈</BreadcrumbItem>
		<BreadcrumbItem>패밀리 목록</BreadcrumbItem>
	</Breadcrumb>

	<HippoButton color="transparent" disabled={true} size="md" class=" text-transparent"
		>'</HippoButton
	>
</div>

<div class="flex justify-between mb-2">
	<Breadcrumb aria-label="Default breadcrumb example" class="flex items-center">
		<BreadcrumbItem href="/#" home>홈</BreadcrumbItem>
		<BreadcrumbItem href="/#">패밀리 목록</BreadcrumbItem>
		<BreadcrumbItem>히포티앤씨</BreadcrumbItem>
	</Breadcrumb>

	<HippoButton color="transparent" size="md" on:click={() => goto('/family')}>이전</HippoButton>
</div>
