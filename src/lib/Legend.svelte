<script>
  import { onMount } from "svelte";
  import "@maptiler/sdk/dist/maptiler-sdk.css";
  import "maplibre-gl/dist/maplibre-gl.css";
  import "@watergis/maplibre-gl-legend/dist/maplibre-gl-legend.css";
  import { MaplibreLegendControl } from "@watergis/maplibre-gl-legend";

  let { map } = $props();

  onMount(() => {
    if (!map) return;

    const targets = {
      "1710-1890": "1710–1890", 
      "1890-1900": "1890-1900"// add the rest of the years -- they must match exactly the maptiler data values
    };

    const options = {
      showDefault: true,
      onlyRendered: false,
      showCheckbox: false,
      reverseOrder: false,
    };

    const legendControl = new MaplibreLegendControl(targets, options);
    map.addControl(legendControl, "bottom-left");
  });
</script>
