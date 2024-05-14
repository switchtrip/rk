<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import { base } from "$app/paths";
  import { ChevronLeft } from "lucide-svelte";
  function goBack(e) {
    window.history.back();
  }
</script>

<div class="pt-10 p-4 sm:p-8 md:p-12 space-y-10 max-w-7xl mx-auto">
  <div class="pt-10">
    <div class="flex justify-between">
      <h1 class="h1">{data.eventName}</h1>
      <button on:click={goBack} class="btn flex p-4">
        <ChevronLeft size="40" />
      </button>
    </div>
  </div>
  <div class="gallery grid grid-cols-2 md:grid-cols-4 gap-2">
    {#each data.images as image}
      <a class="gallery-item" href="{base}/{image.url}">
        <img
          class=" w-full h-full object-cover"
          loading="lazy"
          src="{base}/{image.url}"
          alt={image.caption}
        />
      </a>
    {/each}
  </div>
</div>

<style>
  .gallery {
    grid-auto-rows: 25vw;
    grid-auto-flow: dense;
  }
  .gallery > .gallery-item:nth-child(5n) {
    /* grid-column: span 2; */
    /* border: 3px solid white; */
  }
  .gallery > .gallery-item:nth-child(3n) {
    grid-column: span 2;
    /* border: 3px solid white; */
    grid-row: span 2;
  }
</style>
