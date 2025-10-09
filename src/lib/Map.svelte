<script>
  import { onMount, onDestroy } from "svelte";
  import { Map, config } from "@maptiler/sdk";
  import Control from "ol/control/Control";
  import Legend from "./Legend.svelte";
  import Help from "./Help.svelte";

  let map;
  let mapContainer;
  let styleJson = `https://api.maptiler.com/maps/0199a53b-d07e-7d68-afa6-afd2e23ef02c/style.json?key=1HCKO0pQuPEfNXXzGgSM`;

  config.apiKey = "YAlgbo83caczbP46lxYj";

  const customElement = document.createElement("div");
  customElement.className = "my-custom-control ol-unselectable ol-control"; // Add OpenLayers default classes for styling
  customElement.innerHTML = "Custom Control"; // Or add other elements like buttons, text, etc.

  let customControl;

  onMount(() => {
    let customControl = new Control({
      element: customElement,
    });
    const initialState = { lng: -71.06, lat: 42.36, zoom: 14 };

    map = new Map({
      container: mapContainer,
      style: styleJson,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
      minZoom: 11,
    });

    // map.addControl(customControl);
  });

  onDestroy(() => {
    map.remove();
  });
</script>

<div class="map-wrap">
  <div class="map" bind:this={mapContainer}>
    {#if map}
      <Help />
      <Legend {map} />
    {/if}
  </div>
</div>
