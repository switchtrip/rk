<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import { base } from "$app/paths";
  import { ChevronLeft } from "lucide-svelte";
  function goBack(e) {
    window.history.back();
  }
</script>

<div class="flex justify-between align-bottom">
    <h1 class="text-lg py-2 sm:text-xl lg:text-2xl sm:py-8 sm:pb-10">{data.eventName}</h1>
  <button on:click={goBack} class="btn flex p-4">
    <ChevronLeft /> <span>Back</span>
  </button>
</div>
<div class="gallery grid grid-cols-2 md:grid-cols-4 gap-2">
  {#each data.images as image}
    <img
      class="gallery-item w-full h-full object-cover "
      loading="lazy"
      src="{base}/{image.url}"
      alt={image.caption}
    />
  {/each}
</div>

<style>
  .gallery {
    /* display: grid; */
    /* grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */
    /* grid-template-columns: 1fr; */
    grid-auto-rows: 25vw;
    grid-auto-flow: dense;
    /* gap: 10px; */
  }
  .gallery > .gallery-item:nth-child(5n) {
    grid-column: span 2;
    /* border: 3px solid white; */
  }
  .gallery > .gallery-item:nth-child(3n) {
    /* grid-column: span 2; */
    /* border: 3px solid white; */
    grid-row: span 2;
  }
  .gallery-item img {
    /* min-width: 200px; */
    /* max-width: 100%;
    border-radius: 5px; */
  }
  /* @media (min-width: 260px) {
    .gallery {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
  }
  @media (min-width: 380px) {
    .gallery {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
  @media (min-width: 640px) {
    .gallery {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    }
  }
  @media (min-width: 768px) {
    .gallery {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
  
  @media (min-width: 1000px) {
    .gallery {
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }
  } */
</style>