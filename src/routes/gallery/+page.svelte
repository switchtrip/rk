<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import * as Collapsible from "$lib/components/ui/collapsible";
  import { ChevronsDown, Smile } from "lucide-svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import Autoplay from "embla-carousel-autoplay";
  const plugin = Autoplay({ delay: 1000, stopOnInteraction: true });
  import {
    Lightbox,
    LightboxGallery,
    GalleryThumbnail,
    GalleryImage,
  } from "svelte-lightbox";
  //   function collapse(e){
  //     const gall = e.target.nextElementSibling;
  //     gall.classList.toggle("collapse");
  //   }
</script>

{#each data.gallery as event}
  <Collapsible.Root class="border-2 border-[#38bdf9] rounded-lg sm:p-10 p-2 mb-10">
    <div class="text-slate-300 sm:p-2 sm:py-3 flex gap-5 justify-between">
      <h1 class="text-xl sm:text-4xl py-8 sm:pb-10 ">{event.eventName}</h1>
    </div>
    <Carousel.Root
      class="w-11/12 m-auto"
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
      }}
    >
      <Carousel.Content>
        {#each event.images as image}
          <!-- <Carousel.Item class="max-w-[250px] sm:max-w-[400px]"> -->
          <Carousel.Item class="sm:basis-2/3 max-w-[600px]">
            <img style="object-cover" loading="lazy" src={image.url} alt={image.caption} />
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <Carousel.Previous
        class="top-full left-0 text-white bg-transparent border-0 outline-none"
      />
      <Carousel.Next
        class="top-full right-0 text-white bg-transparent border-0 outline-none"
      />
    </Carousel.Root>
    <div class="flex justify-end">
    <Collapsible.Trigger class="text-[#3e9392] flex gap-5 py-10">
      Gallery view <ChevronsDown color="#3e9392" />
    </Collapsible.Trigger>
    </div>
    <Collapsible.Content class="">
      <LightboxGallery transitionDuration=200>
        <svelte:fragment slot="thumbnail">
          <div class="gallery">
            {#each event.images as image}
            <div class="gallery-item">
              <GalleryThumbnail>
                <!-- <a href={image.url} data-lightbox={event.eventName}> -->
                <img loading="lazy" src={image.url} alt={image.caption} />
                <!-- </a> -->
              </GalleryThumbnail>
              </div>
            {/each}
          </div>
        </svelte:fragment>
        {#each event.images as image}
          <GalleryImage>
            <img loading="lazy" src={image.url} alt={image.caption} />
          </GalleryImage>
        {/each}
      </LightboxGallery>
    </Collapsible.Content>
  </Collapsible.Root>
{/each}


<style>
  .gallery {
    display: grid;
    grid-auto-flow: dense;
    gap: 10px;
  }
  .gallery-item img {
    /* min-width: 200px; */
    max-width: 100%;
    border-radius: 5px;
  }
  @media (min-width: 640px) {
    .gallery{
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
    .gallery > .gallery-item:nth-child(3n) {
      grid-column: span 2;
      grid-row: span 2;
      /* border: 3px solid white; */
    }
    .gallery > .gallery-item:nth-child(3n) img {
      /* filter: blur(2px); */
      object-fit:cover;
    }
    .gallery  .gallery-item:nth-child(4n) {
      /* grid-column: span 2; */
    }
    .gallery  .gallery-item:nth-child(7n-1) {
      /* grid-row: span 2; */
    }
  }
</style>
