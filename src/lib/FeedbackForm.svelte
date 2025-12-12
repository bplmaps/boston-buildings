<script>
  import Fa from "svelte-fa";
  import { mapState } from "./state.svelte";
  import { faBuilding, faX } from "@fortawesome/free-solid-svg-icons";

  let { pid, lnglat } = $props();

  let name = $state("");
  let email = $state("");
  let correctYear = $state("");
  let source = $state("");

  let lat = $state(null)
  let long = $state(null)

  function toggleActive() {
    mapState.form = !mapState.form;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    lat=lnglat.lat
    long=lnglat.lng

    console.log(lnglat)

    const payload = {
      user: name,
      form_date: new Date().toISOString(),
      pid,
      building_date: correctYear,
      source,
      email: email,
      lat: lat,
      long: long
    };

    const res = await fetch("/.netlify/functions/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Error submitting form:", data.error);
      return;
    }

    console.log("Form submitted!", data);

    mapState.form = false;

    alert(
      "Thanks for the suggestion! Our team will review this."
    );

    console.log(payload)
  }
</script>

<div class={`${!mapState.form ? "hidden" : ""}`}>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-stone-800/90 transition-opacity text-white"
  >
    <div
      class="relative transform overflow-hidden rounded-lg bg-stone-900 border-4 border-white px-4 pb-4 pt-5 text-left shadow-xl shadow-red-700/50 transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 !shadow-red"
    >
      <div>
        <div>
          <div
            class="text-center text-2xl uppercase font-black tracking-widest"
          >
            Submit a correction
          </div>
        </div>
        {#if pid}
        <p class="text-md text-center italic mt-2 mb-4">Building parcel ID: {pid}</p>
        {/if}
        <p class="text-sm my-2">Use this form to suggest a corrected building date. If you can, please include a source for your correction.</p>
        <form class="pl-2 py-2 space-y-2 text-sm" onsubmit={handleSubmit}>
          <div class="grid items-center gap-2">
            <span>Your name:</span>
            <input
              placeholder="e.g., Norman Leventhal"
              class="text-black rounded bg-stone-400 px-2 py-1"
              bind:value={name}
            />
          </div>

          <div class="grid items-center gap-2">
            <span>Your email:</span>
            <input
              placeholder="e.g., frontdesk@leventhalmap.org"
              class="text-black rounded bg-stone-400 px-2 py-1"
              bind:value={email}
            />
          </div>

          <div class="grid items-center gap-2">
            <span>What's the correct date of construction for this building?</span>
            <input
              placeholder="e.g., 1776"
              class="text-black rounded bg-stone-400 px-2 py-1"
              bind:value={correctYear}
            />
          </div>

          <div class="grid items-center gap-2">
            <span>Source:</span>
            <input
              placeholder="e.g., Boston Landmark Commission, Atlascope, etc."
              class="text-black rounded bg-stone-400 px-2 py-1"
              bind:value={source}
            />
          </div>

          <div class="flex gap-2 mt-8">
            <button
              type="submit"
              class="ease-in-out transition duration-100 bg-stone-600 hover:cursor-pointer hover:bg-[#3288BD] px-4 py-2 inline-flex w-full justify-center rounded-md border-2"
            >
              <Fa icon={faBuilding} size="lg" />
              <p class="mx-2">Submit</p>
            </button>
            <button
              type="button"
              onclick={toggleActive}
              class="ease-in-out transition duration-100 bg-stone-600 hover:bg-[#D53E4F] hover:cursor-pointer px-4 py-2 inline-flex w-full justify-center rounded-md border-2"
            >
              <Fa icon={faX} size="lg" />
              <p class="mx-2">Cancel</p></button
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
