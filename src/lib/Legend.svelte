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
      "1710-1890": "1710–1889",
      "1890-1900": "1890-1899",
      "1900-1905": "1900-1904",
      "1905-1910": "1905-1909",
      "1910-1920": "1910-1919",
      "1920-1930": "1920-1929",
      "1930-1950": "1930-1949",
      "1950-1975": "1950-1974",
      "1975-2019": "1975-2019",
      null: "Unknown",
    };

    const options = {
      showDefault: true,
      onlyRendered: false,
      showCheckbox: true,
      reverseOrder: true,
      title: "Buildings by year built"
    };

    // hacking the maplibre legend to bits, ugh!

    const legendControl = new MaplibreLegendControl(targets, options);
    map.addControl(legendControl, "bottom-left");
    const title = document.querySelector(".maplibregl-legend-title-label");
    const subtitleHolder = document.createElement("div");
    const subtext = document.createElement("span");
    const atag = document.createElement("a");
    subtext.className = "legend-subtext";
    subtitleHolder.className = "subtitleHolder";
    subtext.textContent = "The gray slashes indicate buildings where the year built is uncertain. ";
    atag.textContent = "Read more about our methodology.";
    title.insertAdjacentElement("afterend", subtitleHolder);
    subtitleHolder.appendChild(subtext);
    subtitleHolder.appendChild(atag);
    atag.href = "https://leventhalmap.org/articles/boston-buildings"
    subtitleHolder.parentNode.removeChild(subtitleHolder.nextSibling)

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

<style>
  :global(.subtitleHolder) {
    margin: 1em 1em 0em 1em;
  }

  :global(.maplibregl-legend-list) {
    max-height: none !important;
  }

  :global(.legend-subtext) {
    padding: 0px !important;
    color: #666;
    margin-top: 0.5rem;
    line-height: 1.3;
  }

  :global(.legend-table-td.highlight) {
    outline: 2px solid #000;
    outline-offset: -2px;
  }
</style>
