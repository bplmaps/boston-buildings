<script>
  import Help from "./Help.svelte";
</script>

<nav class="bg-black py-1 font-sans border-b-1 border-white">
  <div class="max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="flex items-center space-x-2">
        <div class="mr-10">
          <a
            class="inline font-black text-red-400 hover:underline"
            href="https://leventhalmap.org"
            target="blank"
          >
            LMEC
          </a>
          <p class="inline text-white">⧽</p>
          <p class="inline font-bold text-blue-400">
            Digital Projects
          </p>
          <p class="inline text-white">⧽</p>
          <p class="inline italic font-bold text-white">
            Boston Buildings
          </p>
        </div>
      </div>
      <Help />
    </div>
  </div>
</nav>