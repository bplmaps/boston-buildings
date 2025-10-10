<script>
  let { show } = $props();
  function toggle() {
    show = !show; console.log(show)
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
  <div class="absolute right-12 top-20 bg-white/90 p-2 rounded z-1000 w-136">
    <p class="text-sm">This map shows the year of construction for all buildings in Boston(2024). The year built data comes from the city’s comprehensive <a href="https://data.boston.gov/dataset/boston-buildings-inventory">building inventory dataset</a>, which pulls from tax assessor records. Building shapes and locations were obtained from a <a href="https://www.mass.gov/info-details/massgis-data-building-structures-2-d#production">MassGIS dataset</a>. The map is useful for identifying citywide patterns in building ages, though individual records may contain inaccuracies since the data was originally collected for such specific analysis. Read more about the project <a href="https://leventhalmap.org">here</a>.
    </p>
    <p class="text-sm mt-2">
    This project was inspired by Bert Spaan’s Waag Society <a href="https://code.waag.org/buildings/#52.3589,4.894,15">map of the Netherands </a> and Thomas Rhiel’s BKLYNR <a href="https://www.bklynr.com/block-by-block-brooklyns-past-and-present/">map of Brooklyn</a>.</p>
  </div>
{/if}
