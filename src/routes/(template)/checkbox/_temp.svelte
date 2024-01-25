<script>
	import { HippoCheckBox } from '$lib/components/hippocomponent';
	import { notifications } from '$lib/components/notification/notifications';

	function onChange() {
		notifications.success('체크 변화 감지', 500);
	}
</script>

<HippoCheckBox class="text-black" id="id" name="name" value="0" size="w-8 h-8" on:change={onChange}
	>큰 체크
</HippoCheckBox>

<HippoCheckBox class="text-black" id="id" name="name" value="0" size="w-4 h-4" on:change={onChange}
	>작은 체크
</HippoCheckBox>

<HippoCheckBox
	class="text-black"
	id="id"
	name="name"
	value="0"
	size="w-4 h-4"
	distance="ml-4"
	on:change={onChange}
	>레이블 거리 먼 체크
</HippoCheckBox>

<HippoCheckBox
	class="text-[#1E2666]"
	id="id"
	name="name"
	value="0"
	checked
	size="w-8 h-8"
	on:change={onChange}
	><span class="font-bold">체크박스 1</span>
</HippoCheckBox>

<HippoCheckBox
	class="text-[#205CC2]"
	id="id"
	name="name"
	value="0"
	checked
	size="w-8 h-8"
	on:change={onChange}
	><span class="font-bold">체크박스 2</span>
</HippoCheckBox>

<HippoCheckBox
	class="text-[#DB0F26]"
	id="id"
	name="name"
	value="0"
	checked
	size="w-8 h-8"
	on:change={onChange}
	><span class="font-bold">체크박스 2</span>
</HippoCheckBox>

<HippoCheckBox
	class="text-[#3561AC]"
	id="id"
	name="name"
	value="0"
	checked
	size="w-8 h-8"
	on:change={onChange}
	><span class="font-bold">체크박스 2</span>
</HippoCheckBox>

<HippoCheckBox
	class="text-[#FF9114]"
	id="id"
	name="name"
	value="0"
	checked
	size="w-8 h-8"
	on:change={onChange}
	><span class="font-bold">체크박스 2</span>
</HippoCheckBox>

<HippoCheckBox
	class="text-[#39C261]"
	id="id"
	name="name"
	value="0"
	checked
	size="w-8 h-8"
	on:change={onChange}
	><span class="font-bold">체크박스 2</span>
</HippoCheckBox>

<HippoCheckBox
	class="text-[#F15D5D]"
	id="id"
	name="name"
	value="0"
	checked
	size="w-8 h-8"
	on:change={onChange}
	><span class="font-bold">체크박스 2</span>
</HippoCheckBox>
<HippoCheckBox
	class="text-[#373838]"
	id="id"
	name="name"
	value="0"
	checked
	size="w-8 h-8"
	on:change={onChange}
	><span class="font-bold">체크박스 2</span>
</HippoCheckBox>

<HippoCheckBox
	class="text-[#BCBCBC]"
	id="id"
	name="name"
	value="0"
	checked
	size="w-8 h-8"
	on:change={onChange}
	><span class="font-bold">체크박스 2</span>
</HippoCheckBox>
<HippoCheckBox
	class="text-[#1D58BD]"
	id="id"
	name="name"
	value="0"
	checked
	size="w-8 h-8"
	on:change={onChange}
	><span class="font-bold">체크박스 2</span>
</HippoCheckBox>

<HippoCheckBox
	class="text-[#4175CE]"
	id="id"
	name="name"
	value="0"
	checked
	size="w-8 h-8"
	on:change={onChange}
	><span class="font-bold">체크박스 2</span>
</HippoCheckBox>

<HippoCheckBox
	class="text-[#1349A5]"
	id="id"
	name="name"
	value="0"
	checked
	size="w-8 h-8"
	on:change={onChange}
	><span class="font-bold">체크박스 2</span>
</HippoCheckBox>

<HippoCheckBox
	class="text-[#7B7B7B]"
	id="id"
	name="name"
	value="0"
	checked
	size="w-8 h-8"
	on:change={onChange}
	><span class="font-bold">체크박스 2</span>
</HippoCheckBox>

<HippoCheckBox
	class="text-[#303030]"
	id="id"
	name="name"
	value="0"
	checked
	size="w-8 h-8"
	on:change={onChange}
	><span class="font-bold">체크박스 2</span>
</HippoCheckBox>

<HippoCheckBox
	class="text-[#DEDEDE]"
	id="id"
	name="name"
	value="0"
	checked
	size="w-8 h-8"
	on:change={onChange}
	><span class="font-bold">체크박스 2</span>
</HippoCheckBox>
