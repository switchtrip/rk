<script>
  import { BlueNight } from "@skeletonlabs/skeleton";
  import { gsap } from "gsap";
  import { TextPlugin } from "gsap/dist/TextPlugin";
  import { onMount } from "svelte";

  function animate() {
    gsap.registerPlugin(TextPlugin);
    gsap.defaults({ ease: "none" });
    const st = { repeat: -1, repeatDelay: 1 };
    const tl = gsap.timeline(st);
    tl.from("#learn", {
      opacity:0,
      duration: 2.5
    });

    tl.from("#music", {
      opacity:0,
      duration: 2.5
    });

    tl.to("h1 span", {
      text: "Flute",
      duration: 1,
      repeat: 1,
      repeatDelay: 1,
      yoyo: true,
    })
      .to("h1 span", {
        text: "Harmonica",
        duration: 1,
        repeat: 1,
        repeatDelay: 1,
        yoyo: true,
      })
      .to("h1 span", {
        text: "Classical",
        duration: 1,
        repeat: 1,
        repeatDelay: 1,
        yoyo: true,
      })

  }
  onMount(() => {
    // animate();
  });
</script>

<div class="grid grid-rows-3 gap items-center justify-items-center">
  <h3 id="learn" class="text-3xl font-semibold p-2 ">Learn</h3>
  <h1 class="h1 text-4xl font-extrabold">
    <span
      class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone tracking-[0.1em]"
    > 
    </span>
  </h1>
  <h1 id="music" class="text-3xl font-bold text-slate-300 place-self-center uppercase tracking-[0.1em]">Music</h1>
  <h1 class="h1" >Test message</h1>
</div>