<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import { base } from "$app/paths";
  import { page } from "$app/stores";

  import Mycarousel from "$lib/components/Carousel/Mycarousel.svelte";
</script>

<div class="pt-10 p-4 sm:p-8 md:p-12 space-y-10 max-w-7xl mx-auto">
<div class="pt-10 p-4">
  <h1 class="h1">Gallery</h1>
</div>
{#each data.gallery as event}
  <div class="space-y-4 my-10">
    <a
      class="btn anchor underline-offset-8"
      id={event.eventName}
      href="{$page.url.pathname}/{event.eventName}"
    >
      <h2 class="h2">{event.eventName}</h2>
    </a>
    <Mycarousel>
      {#each event.images as image}
        <div
          class="shrink-0 py-4 w-60 md:w-[400px] h-80 md:h-[400px] text-center"
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
  </div>
{/each}

</div>