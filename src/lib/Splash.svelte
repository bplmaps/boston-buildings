<script>
  import Fa from "svelte-fa";
  import { faBuilding } from "@fortawesome/free-solid-svg-icons";

  let active = $state(false);

  function toggleActive() {
    active = !active;
  }

  const text = "Boston's buildings";
  const ramp = [
    "#D53E4F",
    "#F46D43",
    "#FDAE61",
    "#FEE08B",
    "#FFFFBF",
    "#E6F598",
    "#ABDDA4",
    "#66C2A5",
    "#3288BD",
  ];

  const letters = text.split("").map((ch, i) => ({
    char: ch,
    color: ramp[i % ramp.length],
  }));
</script>

<div class:hidden={active}>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-stone-800/90 transition-opacity text-white"
  >
    <div
      class="relative transform overflow-hidden rounded-lg bg-stone-900 border-4 border-white px-4 pb-4 pt-5 text-left shadow-xl shadow-stone-900/10 transition-all mx-8 md:mx-0 sm:my-8 sm:w-full sm:max-w-md sm:p-6"
    >
      <div>
        <div>
          <div
            class="text-center uppercase font-black tracking-widest"
          >
            <h1 class="text-2xl md:text-4xl font-black tracking-widest uppercase">
              {#each letters as l}
                <span style="color: {l.color}">{l.char}</span>
              {/each}
            </h1>
          </div>
        </div>
        <div class="m-3 text-center text-sm md:text-lg sm:mt-5">
          <p class="mb-4">
            This map provides a window into the City of Boston's <a
              href="https://data.boston.gov/dataset/boston-buildings-inventory"
              >Buildings Inventory</a
            > dataset, which estimates the date of construction for structures across
            the city.
          </p>
          <p class="mb-4">
            This map is <i>not</i> an authoritative census of building ages.
            <span class="font-black"> Building ages may not be accurate!</span>
            This means the map is best for
            <span class="italic">aggregate exploration</span>. You can click on
            any building to learn more about the limits of the source dataset,
            as well as resources for studying building history.
          </p>
        </div>
      </div>
      <div class="mt-4 sm:mt-6">
        <button
          type="button"
          onclick={toggleActive}
          class="transition duration-100 ease-in-out inline-flex w-full py-2 justify-center rounded-md bg-stone-600 border-2 hover:cursor-pointer hover:bg-[#66C2A5] hover:text-black hover:border-stone-200"
        >
          <Fa icon={faBuilding} size="lg" />
          <p class="mx-2">Explore buildings</p></button
        >
      </div>
      <div class="py-4 mt-4">
        <p class="text-xs text-center font-semibold">
          A project of the <a
            class="text-blue-900 hover:text-blue-600 transition-colors"
            href="https://leventhalmap.org"
            target="_blank">Leventhal Map & Education Center</a
          >
          at the <a href="https://bpl.org">Boston Public Library</a>
        </p>
      </div>
    </div>
  </div>
</div>
