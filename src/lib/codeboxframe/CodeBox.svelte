<script lang="ts">
  import { notifications } from "$lib/components/notification/notifications";

  function copyCode(id: string){
    let text = document.getElementById(id).innerText
    console.log(text)
    window.navigator.clipboard.writeText(text).then(() => {
      notifications.success('복사되었습니다.', 1000)
    })
  }

  export let id: string = ""

</script>

<div class="flex justify-between bg-gray-200 font-semibold {$$restProps.class}">
  <div class="bg-gray-300 py-2 px-3">Code</div>
  <button class="bg-gray-300 p-2 px-3 hover:text-red-400" on:click={() => copyCode(id)}>Copy</button>
</div>
<div class="py-5 px-8 bg-white overflow-x-auto text-sm">
  <slot/>
</div>