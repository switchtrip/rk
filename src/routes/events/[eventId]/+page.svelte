<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import { base } from "$app/paths";
  import { ChevronLeft, Download } from "lucide-svelte";
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
  <div class="gallery flex flex-wrap justify-center gap-2">
    {#each data.images as image}
      <div class="relative sm:h-[300px]">
        <a class="" href="{base}/{image.url}">
          <img
            class="w-full h-full object-cover"
            loading="lazy"
            src="{base}/{image.url}"
            alt={image.caption}
          />
        </a>
        <a download class="" href="{base}/{image.url}">
        <Download class="absolute bottom-1 right-1"/>
        </a>
      </div>
    {/each}
  </div>
</div>

<style></style>
