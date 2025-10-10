<script>
  let show = false;
</script>

<div class="absolute top-5 right-3">
  <button
    onclick={() => (show = !show)}
    class=" bg-white rounded-full w-6 text-center select-none hover:cursor-pointer"
  >
    ?
  </button>
</div>

{#if show}
  <div class="absolute align-center align-middle bg-white/90 p-2 rounded">
    <p class="text-sm">testing text, list the inspiration, the data source, some things to look out for in the data</p>
  </div>
{/if}
