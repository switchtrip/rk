<script>
  import Mycarousel from "$lib/components/Carousel/Mycarousel.svelte";
  import galleryList from "$lib/data/gallery.json";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import { GalleryVertical, Images } from "lucide-svelte";
  export let eventType;

</script>

  {#each galleryList as event}
  {#if event.type===eventType}
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
            class="max-w-[90%] md:max-w-[500px] shrink-0 py-4 h-80 md:h-[400px] text-center"
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
  {/if}
  {/each}