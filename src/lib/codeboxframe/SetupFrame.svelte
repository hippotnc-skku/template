<script lang="ts">
	import CodeBox from './CodeBox.svelte';
  export let id:string = ""
</script>


<div class="mt-10">
  <div class="mb-4 text-3xl font-bold">
    Setup
  </div>

  <CodeBox {id}>
    <slot/>
  </CodeBox>
</div>