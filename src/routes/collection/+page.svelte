<script>
  // import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";

  import im1 from "$lib/assets/sir_sitting_MO_hd.png?enhanced";
  import im2 from "$lib/assets/sir_harmonica_flute_students.jpeg?enhanced";
  import im3 from "$lib/assets/flute_samjh.jpg?enhanced";

  const img_list = [im1, im2, im3];
</script>

<div class="collection-gradient">
  <div class="pt-24 p-4 sm:p-8 sm:pt-32 lg:pt-36 space-y-10 mx-auto max-w-7xl">
    <h1 class="h1 font-black space-y-8">Collections</h1>
  </div>

  {#if browser}
    <div class="h-screen w-1/2">
      <Carousel bind:this={carousel} 
      particlesToShow={3}
      arrows={false}
      autoplay
      pauseOnFocus
      >
        {#each img_list as src}
          <div class="h-full w-full border-2 border-teal-400">
            <enhanced:img {src} class="h-full w-full object-cover" />
          </div>
        {/each}
      </Carousel>
    </div>
  {/if}
</div>

<style>
  .collection-gradient {
    background-image: radial-gradient(
        at 0% 0%,
        rgba(var(--color-secondary-500) / 0.33) 0px,
        transparent 50%
      ),
      radial-gradient(
        at 98% 1%,
        rgba(var(--color-error-500) / 0.33) 0px,
        transparent 50%
      );
  }
</style>
