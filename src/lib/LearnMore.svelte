<script>
  import Fa from "svelte-fa";
  import { mapState } from "./state.svelte";
  import { faBuilding } from "@fortawesome/free-solid-svg-icons";

  const text = "Researching buildings";
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

  let { pid, lnglat } = $props();

  function toggleActive() {
    mapState.form = !mapState.form;
  }
</script>

<div class={`${!mapState.form ? "hidden" : ""}`}>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-stone-800/90 transition-opacity text-white"
  >
    <div
      class="max-h-[500px] !overflow-auto relative transform overflow-hidden rounded-lg bg-stone-900 border-4 border-white px-4 pb-4 pt-5 text-left transition-all my-8 w-full sm:max-w-lg mx-8 sm:p-6 !shadow-red"
    >
      <div>
        <div>
          <div class="text-center uppercase font-black tracking-widest">
            <h1
              class="text-xl md:text-3xl font-black tracking-widest uppercase"
            >
              {#each letters as l}
                <span style="color: {l.color}">{l.char}</span>
              {/each}
            </h1>
          </div>
        </div>
        {#if pid}
          <p class="text-md text-center italic mt-2 mb-4">
            Building parcel ID: {pid.length < 10 ? `0${pid}` : pid}
          </p>
        {/if}
        <div class="my-6 text-sm mx-6">
          <p class="my-2 font-black !text-md md:text-lg">
            Some buildings in the map are dated incorrectly!
          </p>
          <p class="my-2">
            Reasons for this could include significant renovations to a
            structure, errors in the tax assessment records, particular choices
            by the dataset's author(s), and much more.
          </p>
          Accurately dating every building in the City of Boston is a very difficult
          task. This map represents our partial attempt, using a dataset created
          and published by the City of Boston.
          <p class="my-2">
            Our map simply processes and re-presents publicly available data
            from the City's <a
              href="https://data.boston.gov/dataset/boston-buildings-inventory"
              >buildings inventory dataset</a
            >. If you suspect that a building's date of construction is
            incorrect, you can:
          </p>
          <ol class="list-disc pl-8 italic">
            <li>
              Read our article <a
                href="https://www.leventhalmap.org/articles/dating-every-building-in-boston/"
                >explaining the methodology</a
              >
            </li>
            <li>
              Double-check this parcel ID against the <a
                href="https://data.boston.gov/dataset/boston-buildings-inventory"
                >source dataset</a
              >
            </li>
            <li>
              Compare this parcel ID with official <a
                href="https://app01.cityofboston.gov/parcelviewer/?center={lnglat.lng},{lnglat.lat}&level=18"
                >tax assessment data</a
              >
            </li>
            <li>
              <a
                href="https://atlascope.org/#/view:share$mode:glass$center:{lnglat.lng},{lnglat.lat}$zoom:19$base:maptiler-streets$overlay:ark:/76611/al7rtfm98"
                >View this building Atlascope</a
              > to see when it appears
            </li>
            <li>
              Check out BPL's LibGuide about <a
                href="https://guides.bpl.org/researchyourhome"
                >researching your home</a
              >
            </li>
          </ol>
        </div>
        <button
          onclick={toggleActive}
          type="submit"
          class="mx-auto flex items-end w-32 ease-in-out transition duration-100 bg-stone-600 hover:cursor-pointer hover:bg-[#3288BD] px-4 py-2 justify-center rounded-md border-2"
        >
          <Fa icon={faBuilding} size="lg" />
          <p class="mx-2">Go back</p>
        </button>
      </div>
    </div>
  </div>
</div>
