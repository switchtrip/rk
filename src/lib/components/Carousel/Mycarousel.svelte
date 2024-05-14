<script>
  /** @type {import('../../../routes/gallery/$types').PageData} */
  import { base } from "$app/paths";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";
  import { onMount } from "svelte";
  let el;

  function carouselLeft() {
    if (el) {
      const x =
        el.scrollLeft === 0
          ? el.clientWidth * el.childElementCount // loop
          : el.scrollLeft - el.clientWidth; // step left
      el.scroll(x, 0);
    }
  }
  function carouselRight() {
    if (el) {
      const x =
        el.scrollLeft === el.scrollWidth - el.clientWidth
          ? 0 // loop
          : el.scrollLeft + el.clientWidth; // step right
      el.scroll(x, 0);
    }
  }

  function shake(i) {
    if (el) {
      el.scroll(el.scrollLeft + (i * el.clientWidth) / 5, 0);
    }
  }

  onMount(() => {
    setTimeout(shake, 1000, 1);
    setTimeout(shake, 1300, -1);
  });
</script>

<div class="relative p-0 m-0">
  <div
    bind:this={el}
    class="scroll-px-4 scroll-smooth flex gap-4 overflow-x-auto px-1 m-auto"
  >
    <slot />
  </div>
  <button id="left" class="text-slate-300" on:click={carouselLeft}>
    <ChevronLeft
      size={32}
      strokeWidth={3.5}
      class="mr-auto active:scale-150 transition duration-300"
    />
  </button>
  <button
    id="right"
    class="text-slate-300 active:text-slate-50"
    on:click={carouselRight}
  >
    <ChevronRight
      size={32}
      strokeWidth={3.5}
      class="ml-auto active:scale-150 transition duration-300"
    />
  </button>
</div>

<style>
  button {
    position: absolute;
    top: 50%;
    height: 100%;
    width: 10%;
    transform: translateY(-50%);
  }
  button:active {
    background: transparent;
  }
  #left {
    left: 0;
    /* background: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0)); */
  }
  #right {
    right: 0;
    /* background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.5)); */
  }
  #right:active {
    right: 0;
    background: transparent;
  }
</style>
