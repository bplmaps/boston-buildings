<script>
  import Help from "./Help.svelte";
  import { slide } from "svelte/transition";

  let show = $state(false);
</script>

<nav class="bg-black font-sans border-b border-white">
  <div class="max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class={`flex h-16 items-center justify-between`}>
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
      <div
        transition:slide
        class="absolute z-100 text-white text-sm md:text-md mx-16 bg-black/90 rounded-b-xl border-t border-white shadow-xl"
      >
        <div class="py-2 px-4 md:px-12 md:py-4">
          <p>
            This map shows the year of construction for all buildings in
            Boston as of 2024. The year built data comes from the city's
            comprehensive <a
              href="https://data.boston.gov/dataset/boston-buildings-inventory"
              >building inventory dataset</a
            >, which pulls from tax assessor records. Building shapes and
            locations were obtained from a
            <a
              href="https://www.mass.gov/info-details/massgis-data-building-structures-2-d#production"
              >MassGIS dataset</a
            >. The map is useful for identifying citywide patterns in building
            ages, though individual records may contain inaccuracies since the
            data was originally collected for a variety of purposes. Read more
            about the project <a href="https://leventhalmap.org">here</a>.
          </p>
          <p class="mt-2">
            Source code on <a href="https://github.com/bplmaps/boston-buildings">Github</a>. Made with Maptiler, MapLibre, and Svelte 5. Inspired by Bert Spaan's Waag Society
            <a
              class="underline text-blue-300"
              href="https://code.waag.org/buildings/#52.3589,4.894,15"
              >map of the Netherlands</a
            >
            and Thomas Rhiel's BKLYNR
            <a
              class="underline text-blue-300"
              href="https://www.bklynr.com/block-by-block-brooklyns-past-and-present/"
              >map of Brooklyn</a
            >.
          </p>
        </div>
      </div>
    {/if}
  </div>
</nav>
