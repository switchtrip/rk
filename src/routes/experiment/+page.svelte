<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import { base } from "$app/paths";
  import Mycarousel from "./Mycarousel.svelte";
</script>

{#each data.gallery as list}
  <Mycarousel>
    {#each list.images as image}
      <div
        class="snap-start shrink-0 py-4 w-80 md:w-[400px] h-80 md:h-[400px] text-center"
      >
        <img
          class="snap-center h-full w-full object-cover block rounded-sm"
          loading="lazy"
          src="{base}/{image.url}"
          alt={image.caption}
        />
      </div>
    {/each}
  </Mycarousel>
{/each}

<style></style>
