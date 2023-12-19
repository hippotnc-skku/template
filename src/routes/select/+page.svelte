<script>
  import HippoSelect from "$lib/components/hippocomponent/select/HippoSelect.svelte";
  import { notifications } from "$lib/components/notification/notifications";
  import HippoWhiteFrame from "$lib/components/hippocomponent/HippoWhiteFrame.svelte";

  function onChange(e) {
    notifications.success(`선택한 값은 ${e.target.value}입니다.`, 1000)
  }
   
  const selectCode = [
      ['border-[#1E2666]', 'text-[#1E2666]'],
      ['border-[#205CC2]', 'text-[#205CC2]'],
      ['border-[#3561AC]', 'text-[#3561AC]'],
      ['border-[#DB0F26]', 'text-[#DB0F26]'],
      ['border-[#FF9114]', 'text-[#FF9114]'],
      ['border-[#39C261]', 'text-[#39C261]'],
      ['border-[#F15D5D]', 'text-[#F15D5D]'],
      ['border-[#373838]', 'text-[#373838]'],
      ['border-[#BCBCBC]', 'text-[#BCBCBC]'],
      ['border-[#1D58BD]', 'text-[#1D58BD]'],
      ['border-[#4175CE]', 'text-[#4175CE]'],
      ['border-[#1349A5]', 'text-[#1349A5]'],
      ['border-[#7B7B7B]', 'text-[#7B7B7B]'],
      ['border-[#303030]', 'text-[#303030]'],
      ['border-[#DEDEDE]', 'text-[#DEDEDE]']
    ]
  
    selectCode.forEach((c,i) => c.push(`<HippoSelect class="w-96 ${c[0]} ${c[1]}"\n on:change={(e) => onChange(e)}>
      <option disabled selected>숫자를 선택하세요.</option>
      {#each options as option}
        <option value={option.value}>{option.name}</option>
      {/each}\n</HippoSelect>`))

    const options = [
      {name: 'first', value : 1},
      {name: 'second', value : 2},
      {name: 'third', value : 3},
      {name: 'fourth', value : 4},
      {name: 'fifth', value : 5},
      {name: 'sixth', value : 6},
      {name: 'senvth', value : 7},
      {name: 'eighth', value : 8},
      {name: 'ninth', value : 9},
      {name: 'tenth', value : 10},
    ]

    function copyCode(id){
    let text = document.getElementById(id).innerText
    window.navigator.clipboard.writeText(text).then(() => {
      notifications.success('복사되었습니다.', 1000)
    })
  }

</script>


<div class="flex justify-center">
  <HippoWhiteFrame class="text-center py-5 w-[80%] space-y-1">
    <div class="text-lg font-bold">
      크기 변환은 padding을 조절하시면 됩니다.
    </div>
    <div class="text-lg font-bold">
      그 이외에 id나 type를 넣으시면 적용이됩니다.(ex: type = "submit", id ="id")
    </div>
  </HippoWhiteFrame>
</div>

<div class="flex flex-col items-center mt-10">
  <div>
    <div class="flex justify-between bg-gray-200 font-semibold">
      <div class="bg-gray-300 py-2 px-3">Code</div>
      <button class="bg-gray-300 p-2 px-3 hover:text-red-400" on:click={() => copyCode("script")}>Copy</button>
    </div>
    <div class="py-5 px-4 bg-white">
      <pre id="script"><code>&ltscript&gt</code>
    <code>import &#123HippoSelect&#125 from "$lib/components/hippocomponent";</code>
    <code>const options = [
      &#123name: 'first', value : 1&#125,
      &#123name: 'second', value : 2&#125,
      &#123name: 'third', value : 3&#125,
      &#123name: 'fourth', value : 4&#125,
      &#123name: 'fifth', value : 5&#125,
      &#123name: 'sixth', value : 6&#125,
      &#123name: 'senvth', value : 7&#125,
      &#123name: 'eighth', value : 8&#125,
      &#123name: 'ninth', value : 9&#125,
      &#123name: 'tenth', value : 10&#125,
    ]</code>
<code>&lt/script&gt</code>
</pre>
      </div>
  </div>
</div>


<div class="space-y-3 mt-10 ">
  <div class="flex items-center justify-between">
    <div>
      <div class="text-lg font-bold">길이가 긴 select</div>
      <HippoSelect class="w-96 text-gray-900 border-gray-300" on:change={(e) => onChange(e)}>
        <option disabled selected>숫자를 선택하세요.</option>
        {#each options as option}
          <option value={option.value}>{option.name}</option>
        {/each}
      </HippoSelect>
    </div>
    <div>
      <div class="flex justify-between bg-gray-200 font-semibold">
        <div class="bg-gray-300 py-2 px-3">Code</div>
        <button class="bg-gray-300 p-2 px-3 hover:text-red-400" on:click={() => copyCode(`longselect`)}>Copy</button>
      </div>
      <div class="py-5 px-4 bg-white">
        <pre id="longselect" class="text-sm"><code>&ltHippoSelect class="w-96 text-gray-900 border-gray-300"
  on:change=&#123(e) => onChange(e)&#125&gt</code>
  <code>&ltoption disabled selected&gt숫자를 선택하세요.&lt/option&gt</code>
  <code>&#123#each options as option&#125</code>
    <code>&ltoption value=&#123option.value&#125&gt&#123option.name&#125&lt/option&gt</code>
  <code>&#123/each&#125</code>
<code>&lt/HippoSelect&gt</code></pre>
        </div>
    </div>
  </div>
</div>


<div class="space-y-3 mt-10 ">
  <div class="flex items-center justify-between">
    <div>
      <div class="text-lg font-bold">길이가 짧은 select</div>
      <HippoSelect class="w-48 text-gray-900 border-gray-300" on:change={(e) => onChange(e)}>
        <option disabled selected>숫자를 선택하세요.</option>
        {#each options as option}
          <option value={option.value}>{option.name}</option>
        {/each}
      </HippoSelect>
    </div>
    <div>
      <div class="flex justify-between bg-gray-200 font-semibold">
        <div class="bg-gray-300 py-2 px-3">Code</div>
        <button class="bg-gray-300 p-2 px-3 hover:text-red-400" on:click={() => copyCode(`shortselect`)}>Copy</button>
      </div>
      <div class="py-5 px-4 bg-white">
        <pre id="shortselect" class="text-sm"><code>&ltHippoSelect class="w-48 text-gray-900 border-gray-300"
  on:change=&#123(e) => onChange(e)&#125&gt</code>
  <code>&ltoption disabled selected&gt숫자를 선택하세요.&lt/option&gt</code>
  <code>&#123#each options as option&#125</code>
    <code>&ltoption value=&#123option.value&#125&gt&#123option.name&#125&lt/option&gt</code>
  <code>&#123/each&#125</code>
<code>&lt/HippoSelect&gt</code></pre>
        </div>
    </div>
  </div>
</div>



<div class="space-y-3 mt-10 ">
  <div class="flex items-center justify-between">
    <div>
      <div class="text-lg font-bold">첫 요소 선택 select</div>
      <HippoSelect class="w-96 text-gray-900 border-gray-300" on:change={(e) => onChange(e)}>
        <option disabled selected>숫자를 선택하세요.</option>
        {#each options as option}
          <option selected={option.value === 1} value={option.value}>{option.name}</option>
        {/each}
      </HippoSelect>
    </div>
    <div>
      <div class="flex justify-between bg-gray-200 font-semibold">
        <div class="bg-gray-300 py-2 px-3">Code</div>
        <button class="bg-gray-300 p-2 px-3 hover:text-red-400" on:click={() => copyCode(`firstselected`)}>Copy</button>
      </div>
      <div class="py-5 px-4 bg-white">
        <pre id="firstselected" class="text-sm"><code>&ltHippoSelect class="w-96 text-gray-900 border-gray-300"
  on:change=&#123(e) => onChange(e)&#125&gt</code>
  <code>&ltoption disabled selected&gt숫자를 선택하세요.&lt/option&gt</code>
  <code>&#123#each options as option&#125</code>
    <code>&ltoption selected=&#123option.value === 1&#125 
      value=&#123option.value&#125&gt&#123option.name&#125&lt/option&gt</code>
  <code>&#123/each&#125</code>
<code>&lt/HippoSelect&gt</code></pre>
        </div>
    </div>
  </div>
</div>


<div class="space-y-10 mt-10">
  <div class="text-lg font-bold">색깔별</div>
  {#each selectCode as sc, i}
    <div class="flex items-center justify-between">
      <HippoSelect class="w-96 {sc[0]} {sc[1]}" on:change={(e) => onChange(e)}>
        <option disabled selected>숫자를 선택하세요.</option>
        {#each options as option}
          <option value={option.value}>{option.name}</option>
        {/each}
      </HippoSelect>
      <div>
        <div class="flex justify-between bg-gray-200 font-semibold">
          <div class="bg-gray-300 py-2 px-3">Code</div>
          <button class="bg-gray-300 p-2 px-3 hover:text-red-400" on:click={() => copyCode(`select${i+1}`)}>Copy</button>
        </div>
        <div class="py-5 px-4 bg-white">
          <pre id="select{i+1}" class="text-sm"><code>&ltHippoSelect class="w-96 {sc[0]} {sc[1]}"
    on:change=&#123(e) => onChange(e)&#125&gt</code>
    <code>&ltoption disabled selected&gt숫자를 선택하세요.&lt/option&gt</code>
    <code>&#123#each options as option&#125</code>
      <code>&ltoption value=&#123option.value&#125&gt&#123option.name&#125&lt/option&gt</code>
    <code>&#123/each&#125</code>
  <code>&lt/HippoSelect&gt</code></pre>
          </div>
      </div>
    </div>
  {/each}
</div>

