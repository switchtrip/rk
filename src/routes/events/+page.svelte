<script>
  /** @type {import('./$types').PageData} */
  // export let data;
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import Mycarousel from "$lib/components/Carousel/Mycarousel.svelte";
  import galleryList from "$lib/data/gallery.json";
  import { GalleryVertical, Images } from "lucide-svelte";

</script>

<div class="pt-24 p-4 sm:p-8 sm:pt-32 lg:pt-36 space-y-10 mx-auto max-w-7xl">
  <h1 class="h1 font-black">Events</h1>
  {#each galleryList as event}
    <div class=" carousel-gradient card space-y-4">
      <header class="p-4 sm:p-10">
        <h2 class="h3">
          <a id={event.eventName} href="{$page.url.pathname}/{event.eventName}">
            {event.eventName}
          </a>
        </h2>
        <div class="pt-4">
          {#if event.eventLocation}
            <p>
              Loc: {event.eventLocation}
            </p>
          {/if}
          {#if event.Date}
            <p>
              Date: {event.Date}
            </p>
          {/if}
        </div>
        <div class="flex flex-row-reverse">
        <a class="btn btn-icon" href="{$page.url.pathname}/{event.eventName}">
          <Images />
        </a>
        </div>
      </header>
      <Mycarousel>
        {#each event.images as image}
          <div
            class="first:max-w-[70vw] max-w-[90%] shrink-0 py-4 h-80 md:h-[400px] text-center"
          >
            {#if image}
              <a href="{base}/{image.url}">
                <img
                  class=" h-full w-full object-cover block rounded-sm"
                  loading="lazy"
                  src="{base}/{image.url}"
                  alt={image.caption}
                />
              </a>
            {/if}
          </div>
        {/each}
      </Mycarousel>
    </div>
  {/each}
</div>

<style>
  .carousel-gradient {
     /* background-image:  */
     /* linear-gradient(rgba(var(--color-primary-500), rgba(var(--color-error-500)))) */
			/* radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%),
			radial-gradient(at 100% 100%,  rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%); */
			/* radial-gradient(at 90% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 90% 0%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%); */
	}
</style>