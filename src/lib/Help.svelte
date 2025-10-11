<script>
  let { show } = $props();
  function toggle() {
    show = !show;
    console.log(show);
  }
</script>

<div class="absolute top-5 right-3">
  <button
    onclick={toggle}
    class=" bg-white rounded-full w-6 text-center select-none hover:cursor-pointer"
  >
    ?
  </button>
</div>

{#if show}
  <div
    class="absolute right-4 top-10 sm:right-8 sm:top-16 md:right-12 md:top-20
         bg-white/95 p-3 sm:p-4 rounded-2xl z-[1000]
         w-[90%] sm:w-72 md:w-80 lg:w-96 shadow-lg max-w-md"
  >
    <p class="text-sm">
      This map shows the year of construction for all buildings in Boston as of
      2024. The year built data comes from the city’s comprehensive <a
        href="https://data.boston.gov/dataset/boston-buildings-inventory"
        >building inventory dataset</a
      >, which pulls from tax assessor records. Building shapes and locations
      were obtained from a
      <a
        href="https://www.mass.gov/info-details/massgis-data-building-structures-2-d#production"
        >MassGIS dataset</a
      >.
    </p>
    <p class="text-sm mt-2">
      The map is useful for identifying citywide patterns in building ages,
      though individual records may contain inaccuracies since the data was not
      originally collected for such specific analysis. Read more about the
      project <a href="https://leventhalmap.org/articles/boston-building-ages"
        >here</a
      >.
    </p>
    <p class="text-sm mt-2">
      This project was inspired by Bert Spaan’s Waag Society <a
        href="https://code.waag.org/buildings/#52.3589,4.894,15"
        >map of the Netherands
      </a>
      and Thomas Rhiel’s BKLYNR
      <a
        href="https://www.bklynr.com/block-by-block-brooklyns-past-and-present/"
        >map of Brooklyn</a
      >. This map uses
      <a
        href="https://docs.maptiler.com/guides/map-tiling-hosting/data-processing/how-to-create-tiles-from-vector-data/"
        >Maptiler vector tiles</a
      >
      and <a href="https://maplibre.org/maplibre-gl-js/docs/">MapLibre GL JS</a>
      in a <a href="https://svelte.dev/">Svelte</a> app.
    </p>
  </div>
{/if}
