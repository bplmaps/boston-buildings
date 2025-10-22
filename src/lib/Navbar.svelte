<script>
  import Help from "./Help.svelte";
  let show = $state(false);
</script>

<nav class="bg-black py-1 font-sans border-b border-white">
  <div class="max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class={`flex ${show ? "h-18" : "h-16"} items-center justify-between`}>
      <div class="flex items-center space-x-2">
        <div class="mr-10">
          <a
            class="inline font-black text-red-400 hover:underline"
            href="https://leventhalmap.org"
            target="_blank"
          >
            LMEC
          </a>
          <p class="inline text-white">⧽</p>
          <p class="inline font-bold text-blue-400">Digital Projects</p>
          <p class="inline text-white">⧽</p>
          <p class="inline italic font-bold text-white">Boston Buildings</p>
        </div>
      </div>
      <div class="h-16">
        <Help bind:show />
      </div>
    </div>

    {#if show}
      <div class="text-white text-sm py-3 border-t border-gray-600 leading-snug">
        <p>
          This map shows the year of construction for all buildings in Boston(2024). The year built data comes 
          from the city’s comprehensive <a href="https://data.boston.gov/dataset/boston-buildings-inventory">building 
          inventory dataset</a>, which pulls from tax assessor records. Building shapes and locations were obtained 
          from a <a href="https://www.mass.gov/info-details/massgis-data-building-structures-2-d#production">MassGIS 
          dataset</a>. The map is useful for identifying citywide patterns in building ages, though individual records 
          may contain inaccuracies since the data was originally collected for such specific analysis. Read more about 
          the project <a href="https://leventhalmap.org">here</a>.
        </p>
        <p class="mt-2">
          Inspired by Bert Spaan's Waag Society 
          <a class="underline text-blue-300" href="https://code.waag.org/buildings/#52.3589,4.894,15">map of the Netherlands</a>
          and Thomas Rhiel's BKLYNR 
          <a class="underline text-blue-300" href="https://www.bklynr.com/block-by-block-brooklyns-past-and-present/">map of Brooklyn</a>.
        </p>
      </div>
    {/if}
  </div>
</nav>