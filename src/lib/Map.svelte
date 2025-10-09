<script>
  import { onMount, onDestroy } from "svelte";
  import { Map, config } from "@maptiler/sdk";
  import Legend from "./Legend.svelte";

  let map;
  let mapContainer;
  let styleJson = `https://api.maptiler.com/maps/0199a53b-d07e-7d68-afa6-afd2e23ef02c/style.json?key=1HCKO0pQuPEfNXXzGgSM`;

  config.apiKey = "YAlgbo83caczbP46lxYj";

  onMount(() => {
    const initialState = { lng: -71.06, lat: 42.36, zoom: 14 };

    map = new Map({
      container: mapContainer,
      style: styleJson,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
      minZoom: 11,
    });
  });

  onDestroy(() => {
    map.remove();
  });
</script>

<div class="map-wrap">
  <div class="map" bind:this={mapContainer}>
    {#if map}
      <Legend {map} />
    {/if}
  </div>
</div>
