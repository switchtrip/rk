<script>
    import { gsap } from "gsap";
    import { Palette } from "lucide-svelte";
    import { onMount } from "svelte";
  
    function gRI(max = 100, min = 0) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    function gRC() {
      const r = gRI(255);
      const g = gRI(255);
      const b = gRI(255);
      return `rgb(${r} ${g} ${b})`;
    }
    function getRadius(a = 50, b = 50, c = 50, d = 50) {
      return `${a}% ${100 - a}% ${b}% ${100 - b}% / ${c}% ${100 - d}% ${d}% ${100 - c}%`;
    }
    function cbg() {
      gsap.to(".bubble", {
        duration: 1,
        top: `${gRI(80)}%`,
        right: `${gRI(80)}%`,
        height: `${gRI(400, 50)}px`,
        width: `${gRI(400, 50)}px`,
        "border-radius": getRadius(
          gRI(80, 20),
          gRI(80, 20),
          gRI(80, 20),
          gRI(80, 20)
        ),
        background: `linear-gradient(to bottom, ${gRC()}, 90%, ${gRC()})`,
      });
      gsap.to("main", {
        duration: 1,
        background: `linear-gradient(to bottom, ${gRC()}, 90%, ${gRC()})`,
      });
    }
  </script>
  
  <main
    class="h-screen grid gap-8 md:gap-16 content-center justify-center justify-items-center"
  >
    <h1 class=" font-serif text-7xl md:text-9xl p-2 md:p-4 text-center">
      Random bg
    </h1>
    <button
      class="z-10 hover:shadow-md hover:shadow-black active:translate-y-1 active:shadow-none transition duration-100 rounded-full p-6 md:p-9 w-max h-max"
      on:click={cbg}
    >
      <Palette />
    </button>
    <div class="bubble fixed w-11 h-20 overflow-hidden opacity-50 bg-primary"></div>
  </main>