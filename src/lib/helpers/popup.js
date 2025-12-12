export const popupHTML = (feature, lnglat, pid) => `
  <div class="space-y-2 text-stone-800">

    <div class="text-[1.3em] font-medium gap-2">
      Estimated Year Built:
      <span class="!font-black text-stone-900">
        ${feature.properties.yr_built || "Unknown"}
      </span>
      Parcel ID: 
      <span class="!font-black text-stone-900">
        ${pid.length < 10 ? `0${pid}` : pid}
      </span>
    </div>

    <div class="flex gap-2">
    <div class="mt-3 px-3 py-2 bg-stone-100 rounded border border-stone-300 hover:bg-stone-200 hover:border-stone-400">

    <a
      class="block underline font-semibold"
      href="https://atlascope.org/#/view:share$mode:glass$center:${lnglat.lng},${lnglat.lat}$zoom:19$base:maptiler-streets$overlay:ark:/76611/al7rtfm98"
    >
      Open in Atlascope
    </a>

    </div>
    
    <div class="mt-3 px-3 py-2 bg-stone-100 rounded border border-stone-300 hover:bg-stone-200 hover:border-stone-400">

    <a
      class="block underline font-semibold"
      href="https://app01.cityofboston.gov/parcelviewer/?center=${lnglat.lng},${lnglat.lat}&level=18"
    >
      Open in Parcel Viewer
    </a>
    </div>

    </div>

        <div class="mt-3 px-3 py-2 bg-stone-100 rounded border border-stone-300 hover:bg-stone-200 hover:border-stone-400">

    <a
      class="block text-blue-700 underline font-semibold"
      href="https://www.cityofboston.gov/assessing/search/?pid=${pid.length < 10 ? `0${pid}` : pid}"
    >
      View City of Boston tax assessment records
    </a>

    </div>

    <div class="mt-3 px-3 py-2 bg-stone-100 rounded border border-stone-300 hover:bg-stone-200 hover:border-stone-400">

    <p class="text-sm text-stone-700">
      Does this year built look incorrect?
      <button class="inline hover:cursor-pointer underline text-red-600 font-semibold">
        Learn more
      </button>
    </p>
    </div>
      </div>
`;
