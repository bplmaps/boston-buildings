<script>
  export let show;
</script>

<div class="absolute top-5 right-3">
  <button
    on:click={() => show = !show}
    class="bg-white rounded-full w-6 text-center select-none hover:cursor-pointer"
  >
    ?
  </button>
</div>