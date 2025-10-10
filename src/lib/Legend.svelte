<script>
  import { onMount } from "svelte";
  import { MaplibreLegendControl } from "@watergis/maplibre-gl-legend";
  import "@maptiler/sdk/dist/maptiler-sdk.css";
  import "maplibre-gl/dist/maplibre-gl.css";
  import "@watergis/maplibre-gl-legend/dist/maplibre-gl-legend.css";

  let { map, legendArrow } = $props();

  onMount(() => {
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
      showCheckbox: true,
      reverseOrder: true,
    };

    const legendControl = new MaplibreLegendControl(targets, options);
    map.addControl(legendControl, "bottom-left");

    const title = document.querySelector(".maplibregl-legend-title-label");
    const subtext = document.createElement("div");
    subtext.className = "legend-subtext";
    subtext.textContent =
      "The gray slashes mark buildings where the year built is uncertain. The ID used to match the construction year appears more than once, meaning multiple buildings share the same ID, but were not necessarily built in the same year.";
    title.insertAdjacentElement("afterend", subtext);

    $effect(() => {
      document
        .querySelectorAll(".legend-table-td.highlight")
        .forEach((el) => el.classList.remove("highlight"));
      if (!legendArrow) return;

      function hexToRgb(hex) {
        const clean = hex.replace("#", "");
        const bigint = parseInt(clean, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgb(${r}, ${g}, ${b})`;
      }

      document.querySelectorAll(".legend-table-td[style]").forEach((cell) => {
        const bg = cell["style"].backgroundColor.trim().toLowerCase();
        const targetColor = legendArrow.trim().toLowerCase();

        const targetRgb = hexToRgb(targetColor);
        if (bg === targetRgb) {
          cell.classList.add("highlight");
        }
      });
    });
  });
</script>
