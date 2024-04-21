<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import { base } from "$app/paths";
  import * as Collapsible from "$lib/components/ui/collapsible";
  import { ChevronsDown, ChevronsUp, } from "lucide-svelte";
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
  //   const b = base==="." ? "":base;
  //   console.log("this is:", b);
</script>

{#each data.gallery as event}
  <Collapsible.Root
    class="border-2 border-slate-700 bg-slate-950 rounded-lg sm:p-10 p-2 mb-10"
  >
    <div class="text-slate-400 sm:p-2 sm:py-3 flex gap-5 justify-between">
      <h1 class="text-xl sm:text-4xl py-8 sm:pb-10">{event.eventName}</h1>
    </div>
    <Carousel.Root
      class="w-11/12 h-11/12 m-auto border-8 border-double border-slate-600 rounded-md p-4"
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
      }}
    >
      <Carousel.Content class="-ml-5">
        {#each event.images as image}
          <!-- <Carousel.Item class="max-w-[250px] sm:max-w-[400px]"> -->
          <Carousel.Item class="pl-1 sm:basis-2/3 max-w-[600px]">
            <img
              class="h-full object-cover"
              loading="lazy"
              src="{base}/{image.url}"
              alt={image.caption}
            />
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <!-- <Carousel.Previous
        class="top-full left-0 text-white bg-transparent border-0 outline-none"
      />
      <Carousel.Next
        class="top-full right-0 text-white bg-transparent border-0 outline-none"
      /> -->
    </Carousel.Root>
    <div class="flex justify-end">
      <Collapsible.Trigger class="text-[#3e9392] flex gap-5 py-10">
        Gallery view <ChevronsDown color="#3e9392" />
      </Collapsible.Trigger>
    </div>
    <Collapsible.Content class="">
      <LightboxGallery
        transitionDuration={100}
        enableImageExpand={true}
        imagePreset={"fullscreen"}
      >
        <svelte:fragment slot="thumbnail">
          <div class="gallery">
            {#each event.images as image}
              <div class="gallery-item">
                <GalleryThumbnail>
                  <!-- <a href={image.url} data-lightbox={event.eventName}> -->
                  <!-- <img loading="lazy" src={image.url} alt={image.caption} /> -->
                  <img
                    loading="lazy"
                    src="{base}/{image.url}"
                    alt={image.caption}
                  />
                  <!-- </a> -->
                </GalleryThumbnail>
              </div>
            {/each}
          </div>
        </svelte:fragment>
        {#each event.images as image}
          <GalleryImage>
            <img loading="lazy" src="{base}/{image.url}" alt={image.caption} />
          </GalleryImage>
        {/each}
      </LightboxGallery>
    <div class="flex justify-end">
      <Collapsible.Trigger class="text-[#3e9392] flex gap-5 py-10">
        Scroll view <ChevronsUp color="#3e9392" />
      </Collapsible.Trigger>
    </div>
    </Collapsible.Content>
  </Collapsible.Root>
{/each}

<style>
  .gallery {
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */
    grid-template-columns: 1fr;
    grid-auto-flow: dense;
    gap: 10px;
  }
  .gallery > .gallery-item:nth-child(3n-1) {
    grid-column: span 2;
    grid-row: span 2;
    /* border: 3px solid white; */
  }
  .gallery > .gallery-item:nth-child(3n) {
    /* grid-column: span 2; */
    /* border: 3px solid white; */
  }
  .gallery-item img {
    /* min-width: 200px; */
    max-width: 100%;
    border-radius: 5px;
  }
  @media (min-width: 260px) {
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
  }
</style>
