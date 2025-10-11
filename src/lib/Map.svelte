<script>
  import { fly, fade } from "svelte/transition";
  import "@maptiler/sdk/dist/maptiler-sdk.css";
  import { onMount } from "svelte";
  import { Map, config } from "@maptiler/sdk";
  import Legend from "./Legend.svelte";
  import { Popup } from "@maptiler/sdk";

  let map = $state();
  let mapContainer;
  let legendArrow = $state();
  let delay = $state(false);

  setTimeout(() => {
    delay = true;
  }, 500);

  const colors = [
    { range: { start: 1975, end: 2019 }, color: "#3288BD" },
    { range: { start: 1950, end: 1975 }, color: "#66C2A5" },
    { range: { start: 1930, end: 1950 }, color: "#ABDDA4" },
    { range: { start: 1920, end: 1930 }, color: "#E6F598" },
    { range: { start: 1910, end: 1920 }, color: "#FFFFBF" },
    { range: { start: 1905, end: 1910 }, color: "#FEE08B" },
    { range: { start: 1900, end: 1905 }, color: "#FDAE61" },
    { range: { start: 1890, end: 1900 }, color: "#F46D43" },
    { range: { start: 1710, end: 1890 }, color: "#D53E4F" },
    { range: { start: 0, end: 0 }, color: "#2E2E2E" },
  ];

  function getColorForYear(year) {
    if (year == null || isNaN(year)) return "#2E2E2E"; // fallback for unknown
    const match = colors.find(
      ({ range }) => year >= range.start && year < range.end
    );
    return match ? match.color : "#2E2E2E";
  }

  onMount(() => {
    config.apiKey = "YAlgbo83caczbP46lxYj";
    const initialState = { lng: -71.06, lat: 42.36, zoom: 14 };

    map = new Map({
      container: mapContainer,
      style: `https://api.maptiler.com/maps/0199a53b-d07e-7d68-afa6-afd2e23ef02c/style.json?key=YAlgbo83caczbP46lxYj`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
      minZoom: 11,
    });

    map.on("load", () => {
      map.addSource("buildings", {
        type: "vector",
        tiles: [
          "https://api.maptiler.com/tiles/0199c972-a1bc-7fba-a054-bcb64c5c21f9/{z}/{x}/{y}.pbf?key=YAlgbo83caczbP46lxYj",
        ],
        minzoom: 11,
        maxzoom: 20,
      });

      map.addLayer({
        id: "buildings-layer",
        type: "fill",
        source: "buildings",
        "source-layer": "all_buildings",
        paint: {
          "fill-opacity": 0,
        },
      });

      map.on("mousemove", "buildings-layer", (e) => {
        const feature = e.features?.[0];
        if (feature) {
          const yr = Number(feature.properties.yr_built);
          legendArrow = getColorForYear(yr);
          map.getCanvas().style.cursor = "pointer";
        } else {
          legendArrow = null;
          map.getCanvas().style.cursor = "grab";
        }
      });

      map.on("mouseleave", "buildings-layer", () => {
        map.getCanvas().style.cursor = "";
        legendArrow = null;
      });

      map.on("click", "buildings-layer", (e) => {
        const feature = e.features[0];
        new Popup()
          .setLngLat(e.lngLat)
          .setHTML(
            `<div class="text-md">Year Built: <strong>${feature.properties.yr_built || "Unknown"}</strong></div>`
          )
          .addTo(map);
      });
    });
  });
</script>

<div class="map-wrap">
  <div class="map" bind:this={mapContainer}>
    <div id="geocodecontainer"></div>

    {#if map && delay}
      <Legend {map} {legendArrow} />
    {/if}
  </div>
</div>
