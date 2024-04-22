<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import { base } from "$app/paths";
  import Mycarousel from "./Mycarousel.svelte";
</script>

{#each data.gallery as event}
  <div class="text-slate-400 sm:p-2 sm:py-3 flex gap-5 justify-between">
    <h1 class="text-xl sm:text-4xl py-8 sm:pb-10">{event.eventName}</h1>
  </div>
  <Mycarousel interval={1000}>
    {#each event.images as image}
      <div
        class="shrink-0 py-4 w-80 md:w-[400px] h-80 md:h-[400px] text-center"
      >
        <img
          class="h-full w-full object-cover block rounded-sm"
          loading="lazy"
          src="{base}/{image.url}"
          alt={image.caption}
        />
      </div>
    {/each}
  </Mycarousel>
{/each}

<style></style>
