<script lang="ts">
	import type { ButtonType } from '$lib/components/hippocomponent/type';

	export let type: ButtonType = 'button';

	const setType = (node: HTMLButtonElement, _type: ButtonType) => {
		node.type = _type;
		return {
			update(_type: ButtonType) {
				node.type = _type;
			}
		};
	};
</script>

<button use:setType={type} class="{$$restProps.class} text-sm text-primary" on:click
	><slot />
</button>
