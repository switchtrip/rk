<script>
    /** @type {import('./$types').PageData} */
  import { base } from "$app/paths";
  import {ChevronLeft, ChevronRight} from "lucide-svelte";
  export let interval=5000;
  let elemCarousel;

  function carouselLeft(){
    if(elemCarousel){
	const x =
    elemCarousel.scrollLeft === 0
			? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
			: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
	elemCarousel.scroll(x, 0);
    }
}
  function carouselRight(){
    if(elemCarousel){
	const x =
		elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
			? 0 // loop
			: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
	elemCarousel.scroll(x, 0);
    }
}
// setInterval(carouselRight, interval);
</script>

<div class="wrapper">
<div bind:this={elemCarousel} class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-1 m-auto">
    <slot/>
</div>
<button id="left" class="text-slate-300"  on:click={carouselLeft}>
    <ChevronLeft size={32} strokeWidth={3.5} class="mr-auto"/>
</button>
<button id="right" class="text-slate-300"  on:click={carouselRight}>
    <ChevronRight size={32} strokeWidth={3.5} class="ml-auto"/>
</button>
</div>

<style>
.wrapper{
    position: relative;
    /* border: 5px solid white; */
    padding: 0;
    margin: 0;
}
button{
    position: absolute;
    top: 50%;
    height: 100%;
    width: 20%;
    transform: translateY(-50%);
}
#left{
left: 0;
background: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0));
}
#right{
right: 0;
background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.5));
}
</style>