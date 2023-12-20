<script>
  import CodeBox from "$lib/codeboxframe/CodeBox.svelte";
import CodeExampleFrame from "$lib/codeboxframe/CodeExampleFrame.svelte";
import SetupFrame from "$lib/codeboxframe/SetupFrame.svelte";
import {HippoWhiteFrame} from "$lib/components/hippocomponent";
  import { notifications } from "$lib/components/notification/notifications";


  function copyCode(id){
    let text = document.getElementById(id).innerText
    window.navigator.clipboard.writeText(text).then(() => {
      notifications.success('복사되었습니다.', 1000)
    })
  }

</script>

<HippoWhiteFrame class="text-center py-5 w-full space-y-1">
  <div class="text-lg font-bold">
    모든 component의 골격을 나타내는 하얀 배경 프레임입니다.
  </div>
  <div class="text-lg font-bold">
    크기 변경은 padding과 width를 조절하여 사용 하실 수 있습니다.
  </div>
  <div class="text-lg font-bold">
    default class는 bg-white md:rounded-2xl bg-clip-border shadow-soft-sm입니다.
  </div>
</HippoWhiteFrame>

<SetupFrame id="script">
  <pre id="script"><code>&ltscript&gt</code>
  <code>import &#123HippoWhiteFrame&#125 from "$lib/components/hippocomponent";</code>
<code>&lt/script&gt</code></pre>
</SetupFrame>

<CodeExampleFrame>
  <HippoWhiteFrame class="text-center py-5 px-4 space-y-1">
    <div class="text-lg font-bold">
      Default
    </div>
  </HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox id="default" class="mt-10">
  <pre id="default">
<code>&ltHippoWhiteFrame class="text-center py-5 px-4 space-y-1"&gt</code>
  <code>&ltdiv class="text-lg font-bold"&gt</code>
    <code>Default</code>
  <code>&lt/div&gt</code>
<code>&lt/HippoWhiteFrame&gt</code></pre>
</CodeBox>
  
<CodeExampleFrame name="width 80%인 경우">
  <HippoWhiteFrame class="text-center py-5 w-[80%] mx-auto space-y-1">
    <div class="text-lg font-bold">
        width: 80%인 경우
    </div>
  </HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox class="mt-10" id="80">
  <pre id="80">
<code>&ltHippoWhiteFrame class="text-center py-5 w-[80%] space-y-1"&gt</code>
  <code>&ltdiv class="text-lg font-bold"&gt</code>
    <code>width: 80%인 경우</code>
  <code>&lt/div&gt</code>
<code>&lt/HippoWhiteFrame&gt</code></pre>
</CodeBox>
  
<CodeExampleFrame name="padding 40px인 경우">
  <HippoWhiteFrame class="text-center p-10 space-y-1">
    <div class="text-lg font-bold">
      네이버
    </div>
    <div class="text-lg font-bold">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laborum dolorem repellat distinctio facere autem iste, asperiores at dicta qui est, totam corrupti et perferendis minus consequuntur illo suscipit doloribus.
    </div>
  </HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox class="mt-10" id="p40">
<pre id="p40">
<code>&ltHippoWhiteFrame class="text-center p-10 space-y-1"&gt</code>
  <code>&ltdiv class="text-lg font-bold"&gt</code>
    <code>네이버</code>
  <code>&lt/div&gt</code>
  <code>&ltdiv class="text-lg font-bold"&gt</code>
    <code>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laborum
        dolorem repellat distinctio facere autem iste,
        asperiores at dicta qui est, totam corrupti et perferendis
        minus consequuntur illo suscipit doloribus.</code>
  <code>&lt/div&gt</code>
<code>&lt/HippoWhiteFrame&gt</code></pre>
</CodeBox>
