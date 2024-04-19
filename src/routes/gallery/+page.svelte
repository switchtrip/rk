<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import * as Collapsible from "$lib/components/ui/collapsible";
  import { ChevronsDown, Smile } from "lucide-svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import Autoplay from "embla-carousel-autoplay";
  const plugin = Autoplay({ delay: 1000, stopOnInteraction: true });

  //   function collapse(e){
  //     const gall = e.target.nextElementSibling;
  //     gall.classList.toggle("collapse");
  //   }
</script>


{#each data.gallery as event}
  <Collapsible.Root class="border-2 border-[#38bdf9] rounded-lg sm:p-10 p-2">
      <div class="text-slate-300 sm:p-2 sm:py-3 flex gap-5 justify-between ">
        <h1 class="sm:text-4xl sm:pb-10 text-lg py-4">{event.eventName}</h1>
      </div>
    <Carousel.Root 
    class=""
    opts={{
        align: "start",
        loop: true,
        dragFree: true,
      }}
    >
        <Carousel.Content >
        {#each event.images as image}
          <Carousel.Item class="max-w-[250px] sm:max-w-[400px]">
            <img loading="lazy" src={image.url} alt={image.caption} />
        </Carousel.Item>
        {/each}
        </Carousel.Content>
        <Carousel.Previous class="top-full left-0 text-white bg-transparent border-0 outline-none"/>
        <Carousel.Next class="top-full right-0 text-white bg-transparent border-0 outline-none"/>
      </Carousel.Root>
    <Collapsible.Trigger class="text-[#3e9392] flex gap-5 py-10">
    Gallery view <ChevronsDown color="#3e9392" />
    </Collapsible.Trigger >
    <Collapsible.Content class="">
      <div class="gallery">
        {#each event.images as image}
          <a href={image.url} data-lightbox={event.eventName}>
            <img loading="lazy" src={image.url} alt={image.caption} />
          </a>
        {/each}
      </div>
    </Collapsible.Content>
  </Collapsible.Root>
{/each}
<style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-flow: dense;
    gap: 10px;
  }
  .gallery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  @media (min-width: 700px) {
    .gallery > a:nth-child(3n) {
      grid-column: span 2;
      grid-row: span 2;
    }
    .gallery > a:nth-child(4n) {
      grid-column: span 2;
    }
    .gallery > a:nth-child(7n) {
      grid-row: span 2;
    }
  }
</style>
