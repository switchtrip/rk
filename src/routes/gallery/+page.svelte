<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import {  base } from '$app/paths';
  import { page } from '$app/stores';

  import Mycarousel from "./Mycarousel.svelte";

</script>

{#each data.gallery as event}

<a id="{event.eventName}" href="{$page.url.pathname}/{event.eventName}">
    <h1 class="text-lg py-2 sm:text-xl lg:text-2xl sm:py-8 sm:pb-10">{event.eventName}</h1>
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
{/each}
<style></style>
