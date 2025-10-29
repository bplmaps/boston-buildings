<!-- this was all made with boilerplate code from https://docs.maptiler.com/svelte/ -->

<script>
  import Map from "./lib/Map.svelte";
  import Navbar from "./lib/Navbar.svelte";

  import { mapState } from "./lib/state.svelte";
  import { onMount } from "svelte";

  let ready = $state(false);
  const defaults = { long: -71.06, lat: 42.36, zoom: 14 };

  //  url parser straight from Atlascope
  //  we do this so we can pass latlong as params

  function parseUrlParams(initialUrl) {
    let params = {};
    initialUrl.split("$").map((kv) => {
      const i = kv.indexOf(":");
      const k = kv.slice(0, i);
      const v = kv.slice(i + 1);
      params[k] = v;
    });
    return params;
  }

  onMount(() => {
    const urlParams = parseUrlParams(
      window.location.hash.substring(2).split("#")[0]
    );
    mapState.long = urlParams.long
    mapState.lat = urlParams.lat
    mapState.zoom = urlParams.zoom
    ready = true;
  });

</script>

<main>
  <Navbar />
  {#if ready}
    <Map />
  {/if}
</main>
