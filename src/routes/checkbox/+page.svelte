<script>
  import {HippoCheckBox} from "$lib/components/hippocomponent";

  function onChange() {
    console.log('예시')
  }
</script>


<HippoCheckBox
  id="id"
  name="services"
  value=1
  checked
  on:change={onChange}
  >체크박스1
</HippoCheckBox>

<HippoCheckBox
  id="id"
  name="services"
  value=1
  on:change={onChange}
  class=""
  >체크박스1
</HippoCheckBox>
