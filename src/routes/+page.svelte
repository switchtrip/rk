<script>
  import { BlueNight } from "@skeletonlabs/skeleton";
  import { base } from "$app/paths";
  import { gsap } from "gsap";
  import { TextPlugin } from "gsap/dist/TextPlugin";
  import { onMount } from "svelte";
  import { HeaderBg } from "$lib/components/Header/store.js";
  import {
    ChevronDown,
    Forward,
    ChevronRight,
    ChevronLeft,
  } from "lucide-svelte";
  import { siWindowsterminal } from "simple-icons";
  import Mycarousel from "$lib/components/Carousel/Mycarousel.svelte";
  import { fade, fly, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import studentsEmbedLink from "$lib/data/youtubeEmbedLinks.json";
  import emblaCarouselSvelte from "embla-carousel-svelte";
  import Autoplay from "embla-carousel-autoplay";
  import AutoScroll from "embla-carousel-auto-scroll";
  import Fade from "embla-carousel-fade";

  import im1 from "$lib/assets/sir_sitting_MO_hd_blurred.png?enhanced";
  import im2 from "$lib/assets/sir_flute_4x_ultrasharp.png?enhanced";
  import im3 from "$lib/assets/flute_samjh.jpg?enhanced";
  import harmonicafestival2026 from "$lib/assets/harmonicaFes4.jpg?enhanced";
  // import im4 from "$lib/assets/sir_harmonica_flute_students.jpeg?enhanced";

  const img_list = [harmonicafestival2026, im1, im2, im3];
  const class_list = [
    "/classes/class1.jpg",
    "/classes/class2.jpg",
    "/classes/class3.jpg",
    "/classes/class4.jpg",
    "/classes/class5.jpg",
    "/classes/class6.jpg",
    "/classes/class7.jpg",
  ];
  let emblaApi;
  let emblaApiClasses;

  function onInit(event) {
    emblaApi = event.detail;
  }
  function next() {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }
  function prev() {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }
</script>

<div class="">
  <div class="hero h-[100dvh]">
    <div class="mai overflow-hidden">
      <div
        class="embla h-full flex"
        use:emblaCarouselSvelte={{
          options: { loop: true },
          plugins: [
            Autoplay({
              delay: 2500,
              // stopOnMouseEnter: true,
              stopOnInteraction: true,
            }),
            Fade(),
          ],
        }}
        on:emblaInit={onInit}
      >
        <div class="flex h-full">
          {#each img_list as src}
            <div class="relative h-full grow-0 shrink-0 basis-full">
              {#if src === harmonicafestival2026}
                <a href="{base}/events">
                  <enhanced:img
                    class="mask w-full h-full object-cover"
                    {src}
                    alt=""
                  /></a
                >
              {:else}
                <enhanced:img
                  class="mask w-full h-full object-cover"
                  {src}
                  alt=""
                />
              {/if}
              <button class="absolute right-2 top-1/2" on:click={next}
                ><ChevronRight
                  size={32}
                  strokeWidth={4.0}
                  color="rgba(255, 255, 255, 0.5)"
                /></button
              >
              <button class="absolute left-2 top-1/2" on:click={prev}
                ><ChevronLeft
                  size={32}
                  strokeWidth={4.0}
                  color="rgba(255, 255, 255, 0.5)"
                /></button
              >
            </div>
          {/each}
        </div>
      </div>
    </div>

    <section
      class="hero-gradient hero-text backdrop-blur-lg flex items-center justify-center"
    >
      <div class="p-4 flex flex-col gap-8 items-center">
        <!-- <h2 class="text-sm space-x-3 flex text-center">
          <a
            href="{base}/classes?type=harmonica"
            class="a p-2 rounded-lg variant-glass-primary hover:variant-filled-primary variant-outline-primary block min-w-[12ch] cursor-pointer"
            >Harmonica</a
          >
          <a
            href="{base}/classes?type=flute"
            class="a p-2 rounded-lg variant-glass-primary hover:variant-filled-primary variant-outline-primary block min-w-[12ch] cursor-pointer"
            >Flute</a
          >
        </h2> -->
        <h1
          class="font-[Palatine] text-6xl text-[#691f18] dark:text-[#edaa40] leading-none mt-4"
        >
          Surabhi
        </h1>
        <h4
          class="text-lg text-[#691f18]/80 dark:text-[#edaa40]/40 -mt-10 leading-3"
        >
          Music Academy
        </h4>
        <img class="" src="{base}/images/seprator_flute.png" alt="Flute"/>
        <h2
          class=" h2 font-medium dark:font-thin text-primary-700-200-token -mt-1"
        >
          <a
            href="{base}/about"
            class="a variant-outline-primary p-2 rounded-lg"
          >
            Shri Sunil Patil
          </a>
        </h2>
      </div>
    </section>
  </div>
</div>

<div class="pt-10 p-4 sm:p-8 md:p-12 space-y-20 max-w-7xl mx-auto">
  <div id="students" class="mt-10 p-4 space-y-4">
    <div
      class="btn w-20 h-20 rounded-full border-2 border-white bg-left bg-no-repeat bg-cover"
      style="background-image:url('{base}/media/mic.jpeg');"
    ></div>
    <h2 class="h2">Performances</h2>
    <p class="max-w-3xl">
      The academy's annual Harmonica Festival provides students a vibrant
      platform to showcase their musical prowess.
    </p>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each studentsEmbedLink as student}
        <div class="w-full aspect-video">
          <iframe
            class="w-full h-full"
            src={student.url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      {/each}
    </div>
  </div>

  <div id="about" class="pt-10 p-4 space-y-8">
    <div
      class="w-20 h-20 rounded-full border-2 border-yellow-600 bg-left bg-no-repeat bg-cover"
      style="background-image:url('{base}/media/diya.jpeg');"
    ></div>
    <h2 class="h2">About the Academy</h2>
    <section class="space-y-4 max-w-3xl">
      <p>
        Established in 2009 by Shri Sunil Patil, Surabhi Music Academy pays
        homage to the time-honored tradition of Guru Shishya Parampara
        (teacher-disciple relationship). Sunil Patil, a disciple of Pt.Shri
        Vivek Sonar from the Maihar Gharana ( a senior disciple of Pt.
        Hariprasad Chaurasia), exemplifies virtuosity in both the mouth organ
        and flute, dedicating his life to music, teaching, and the advancement
        of the Mouth Organ.
      </p>
      <p>
        His passion for the instrument gave rise to the annual Harmonica
        Festival, a platform showcasing the world's finest mouth organ talents.
        Not only does this event promote the instrument nationally, but it also
        offers students the opportunity to display their skills in front of a
        vast audience alongside seasoned masters.
      </p>
      <p>
        His fervent dedication to disseminating music for the betterment of
        society has led to the cultivation of a substantial following of
        disciples in both Harmonica and Flute. He offers training in both
        instruments through both offline and online modalities.
      </p>
    </section>
  </div>

  <div id="classes" class="pt-10 p-4 space-y-8">
    <!-- <div  class="w-20 h-20 rounded-full border-2 border-yellow-600 bg-top-right  bg-no-repeat bg-cover" style="background-image:url('{base}/media/flute.jpeg');"> -->
    <div
      class="w-20 h-20 rounded-full border-2 border-teal-800 bg-center bg-no-repeat bg-cover"
      style="background-image:url('{base}/media/mor_pankh.jpeg');"
    >
      <!-- Photo by <a href="https://unsplash.com/@saubhagya2304?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Saubhagya gandharv</a> on <a href="https://unsplash.com/photos/A76xbfOeR5c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> -->
    </div>
    <h2 class="h1 underline-offset-8">
      <a class="" href="{base}/classes#classes">Classes</a>
    </h2>
    <p class="">
      Both online and offline classes for Flute and Mouth organ are provided by
      Surabhi Music Academy.
    </p>

    <div
      class="overflow-hidden"
      use:emblaCarouselSvelte={{
        options: { loop: true },
        plugins: [
          // Autoplay({ delay: 500, stopOnMouseEnter: true, stopOnInteraction: true }),
          AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 6 }),
        ],
      }}
      on:emblaInit={(event) => {
        emblaApiClasses = event.detail;
      }}
    >
      <div class="flex h-[300px] sm:h-[400px]">
        {#each class_list as src}
          <div
            class="h-full grow-0 shrink-0 basis-11/12 sm:basis-2/3 md:basis-1/3"
          >
            <img
              class="pl-5 w-full h-full object-cover"
              src="{base}{src}"
              alt=""
            />
          </div>
        {/each}
      </div>

      <section class="flex flex-row-reverse gap-3 mt-8">
        <button
          class="btn-icon variant-outline-primary"
          on:click={() => {
            emblaApiClasses.scrollNext();
          }}><ChevronRight /></button
        >

        <button
          class="btn-icon variant-outline-primary"
          on:click={() => {
            emblaApiClasses.scrollPrev();
          }}><ChevronLeft /></button
        >
      </section>
    </div>

    <!-- <div class="flex flex-col md:flex-row justify-around my-10 pb-10">
      <div class="max-w-[80vw] md:max-w-[30vw] mx-auto my-4 space-y-8">
        <img
          src="{base}/images/class-harmonica.webp"
          alt="Harmonica Class"
          class=" w-full aspect-square object-cover"
        />
        <h3 class="h3">Harmonica Class</h3>
      </div>

      <div class="max-w-[80vw] md:max-w-[30vw] mx-auto my-4 space-y-8">
        <img
          src="{base}/images/class-zoom-harmonica.jpeg"
          alt="Harmonica Class"
          class=" w-full aspect-square object-cover"
        />
        <h3 class="h3">Zoom Class</h3>
      </div>
    </div> -->
  </div>
</div>

<style>
  .hero {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: 1fr;
  }
  .mai {
    grid-row-start: 1;
    grid-row-end: 5;
    grid-column-start: 1;
    grid-column-end: 1;
    /* background-image: url(images/sir_ph.jpeg); */
    -webkit-overflow-scrolling: touch;
  }
  .hero-text {
    grid-row-start: 5;
    grid-row-end: 6;
    grid-column-start: 1;
    grid-column-end: 1;
  }
  .mask {
    mask-image: linear-gradient(
      0deg,
      rgba(242, 202, 181, 0) 0%,
      rgba(164, 110, 18, 0.9) 0%,
      rgba(242, 50, 10, 1) 0%
    );
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
  @media (min-width: 800px) {
    .mask {
      mask-image: none;
    }
    .hero {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: 1fr;
    }
    .mai {
      grid-row-start: 1;
      grid-row-end: 1;
      grid-column-start: 1;
      grid-column-end: 4;
    }
    .hero-text {
      grid-row-start: 1;
      grid-row-end: 1;
      grid-column-start: 4;
      grid-column-end: 6;
    }
  }
  .hero-gradient {
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
