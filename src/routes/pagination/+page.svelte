<script>
  import {HippoPagination} from '$lib/components/hippocomponent'

  const totalCount = 30
  const perPage = 5
</script>


<div class="flex items-center mt-5">
  <div class="w-full max-w-full px-3 mt-0 flex justify-center">
    <HippoPagination {totalCount} {perPage} />
  </div>
</div>