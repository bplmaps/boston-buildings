<script>
  import { onMount } from "svelte";
  import "@maptiler/sdk/dist/maptiler-sdk.css";
  import "maplibre-gl/dist/maplibre-gl.css";
  import "@watergis/maplibre-gl-legend/dist/maplibre-gl-legend.css";
  import { MaplibreLegendControl } from "@watergis/maplibre-gl-legend";
  import Control from "ol/control/Control";

  let { map } = $props();

  onMount(() => {
    const customElement = document.createElement("div");
    customElement.className = "explainer-text ol-unselectable ol-control"; // Add OpenLayers default classes for styling
    customElement.innerHTML = "Custom Control"; // Or add other elements like buttons, text, etc.

    let customControl = new Control({
      element: customElement,
    });

    if (!map) return;

    const targets = {
      "1710-1890": "1710–1890",
      "1890-1900": "1890-1900",
      "1900-1905": "1900-1905",
      "1905-1910": "1905-1910",
      "1910-1920": "1910-1920",
      "1920-1930": "1920-1930",
      "1930-1950": "1930-1950",
      "1950-1975": "1950-1975",
      "1975-2019": "1975-2019",
      null: "Unknown",
    };

    const options = {
      showDefault: true,
      onlyRendered: false,
      showCheckbox: false,
      reverseOrder: true,
    };

    const legendControl = new MaplibreLegendControl(targets, options);
    map.addControl(legendControl, "bottom-left");
    // map.addControl(customControl);
  });
</script>
