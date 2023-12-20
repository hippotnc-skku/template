<script lang="ts">
  export let name: string = "Default"
</script>

<div class="mt-10">
  <div class="mb-4 text-3xl font-bold">
    {name}
  </div>
  <slot/>
</div>