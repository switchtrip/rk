<script>
  import { BlueNight } from "@skeletonlabs/skeleton";
  import { base } from "$app/paths";
  import { gsap } from "gsap";
  import { TextPlugin } from "gsap/dist/TextPlugin";
  import { onMount } from "svelte";
  import { ChevronDown, FileX, SplitSquareHorizontal } from "lucide-svelte";

  function animate() {
    gsap.registerPlugin(TextPlugin);
    gsap.defaults({ ease: "none" });
    const st = { repeat: -1, repeatDelay: 1 };
    const tl = gsap.timeline(st);

    tl.to(
      "h1 span",
      {
        text: "Flute",
        duration: 1,
        repeat: 1,
        repeatDelay: 1,
        yoyo: true,
      },
      "start"
    )
      .to(
        ".mai",
        {
          backgroundImage: `url(${base}/images/sir_ph.jpeg)`,
          duration: 1,
        },
        "start"
      )
      .to(
        "h1 span",
        {
          text: "Harmonica",
          duration: 1,
          repeat: 1,
          repeatDelay: 1,
          yoyo: true,
        },
        "hi"
      )
      .to(
        ".mai",
        {
          backgroundImage: `url(${base}/images/sir_sitting_MO.png)`,
          duration: 1,
        },
        "hi"
      )
      .to(
        "h1 span",
        {
          text: "Classical",
          duration: 1,
          repeat: 1,
          repeatDelay: 1,
          yoyo: true,
        },
        "perform"
      )
      .to(
        ".mai",
        {
          backgroundImage: `url(${base}/images/sir_harmonica_flute_students.jpeg)`,
          duration: 1,
        },
        "perform"
      );
  }
  onMount(() => {
    animate();
  });
  let studentsEmbedLink = [
    {
      student: "All",
      title: "Zindagi Milke bitayenge",
      url: "https://www.youtube.com/embed/15foBS2R5fs?si=CPxrO0N9xDpKS1nQ",
    },
    {
      student: "Anand Kate",
      title: "Deva Shri Ganesha Deva",
      url: "https://www.youtube.com/embed/rZG2E_8bTW4?si=5Na2k5A5nTspnOS7",
    },
    {
      student: "Kanhaiya Patel",
      title: "Raag Jog",
      url: "https://www.youtube.com/embed/SR5LLrRNEq0?si=I6RoidSi7q76mjiu",
    },
    {
      student: "Anand Kate",
      title: "Mere dholna sun",
      url: "https://www.youtube.com/embed/3GAAGCM3QX8?si=bxJqybr4j1pmvxzc",
    },
  ];
</script>

<div class="mai w-full h-screen bg-cover bg-no-repeat bg-center">
  <div class="bg-gradient-to-b from-black/60 to-black/90 w-full h-full">
    <div
      class="pt-96 grid gap-5 items-center justify-items-center overflow-hidden"
    >
      <h2 id="learn" class="h2 text-4xl font-thin">Learn</h2>
      <h1 class="h1 text-6xl min-h-[80px] font-extrabold">
        <span
          class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
        >
        </span>
      </h1>
    </div>
    <div class="mt-20 flex justify-center">
      <a
        class="anchor hover:scale-150 transition duration-100 shadow-xl"
        href="{base}/#students"><ChevronDown size="40" /></a
      >
    </div>
  </div>
</div>

<div class="pt-10 p-4 sm:p-8 md:p-12 space-y-20 max-w-7xl mx-auto">
<div id="students" class="mt-10 p-4 space-y-4">
    <a href="{base}/gallery/">
    
  <div  class="btn w-20 h-20 rounded-full border-2 border-white bg-left bg-no-repeat bg-cover" style="background-image:url('{base}/media/mic.jpeg');">
  </div>
    </a>
  <h2 class="h2">Performances</h2>
  <p class="max-w-3xl">The academy's annual Harmonica Festival provides students a vibrant platform to showcase their musical prowess. </p>
  <div class="pt-10 flex flex-col md:flex-row gap-5 flex-wrap justify-center">
    {#each studentsEmbedLink as student}
      <div class="min-w-[450px] max-w-[400px]">
        <iframe
          class="w-full"
          height="315"
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

<div id="about" class="pt-10 p-4  space-y-8">
<div  class="w-20 h-20 rounded-full border-2 border-yellow-600 bg-left bg-no-repeat bg-cover" style="background-image:url('{base}/media/diya.jpeg');">
</div>
  <h2 class="h2">About the Academy</h2>
  <section class="space-y-4 max-w-3xl">
    <p>
      Established in 2009 by Shri Sunil Patil, Surabhi Music Academy pays homage
      to the time-honored tradition of Guru Shishya Parampara (teacher-disciple
      relationship). Sunil Patil, a disciple of Pt.Shri Vivek Sonar from the
      Maihar Gharana ( a senior disciple of Pt. Hariprasad Chaurasia),
      exemplifies virtuosity in both the mouth organ and flute, dedicating his
      life to music, teaching, and the advancement of the Mouth Organ. He has
      foundation in Hindustani Classical Music since childhood.
    </p>
    <p>
      His passion for the instrument gave rise to the annual Harmonica Festival,
      a platform showcasing the world's finest mouth organ talents. Not only
      does this event promote the instrument nationally, but it also offers
      students the opportunity to display their skills in front of a vast
      audience alongside seasoned masters.
    </p>
    <p>
      His fervent dedication to disseminating music for the betterment of
      society has led to the cultivation of a substantial following of disciples
      in both Harmonica and Flute. He offers training in both instruments
      through both offline and online modalities.
    </p>
  </section>
</div>

<div id="classes" class="pt-10 p-4 space-y-8">
<!-- <div  class="w-20 h-20 rounded-full border-2 border-yellow-600 bg-top-right  bg-no-repeat bg-cover" style="background-image:url('{base}/media/flute.jpeg');"> -->
<div  class="w-20 h-20 rounded-full border-2 border-yellow-600 bg-center bg-no-repeat bg-cover" style="background-image:url('{base}/media/classes.jpeg');">
  <!-- Photo by <a href="https://unsplash.com/@saubhagya2304?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Saubhagya gandharv</a> on <a href="https://unsplash.com/photos/A76xbfOeR5c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> -->
</div>
  <h2 class="h1 underline-offset-8">
    <a
      class=""
      href="{base}/classes#classes">Classes</a
    >
    </h2>
  <p class="">
    Both online and offline classes for Flute and Mouth organ are provided by
    Surabhi Music Academy.
  </p>
  <div class="flex flex-col md:flex-row justify-around my-10 pb-10">

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

  </div>
</div>
</div>

<style>
  .mai {
    /* background-image: url(images/sir_ph.jpeg); */
    /* background-image: url(images/sir_anand_sam.jpeg); */
    /* background-image: url(images/sir_E_base.jpg); */
    /* background-image: url(images/sir_flute_D.png); */
    /* background-image: url(images/fulte_samjawaan.jpeg); */
    /* static/images/fulte_samjawaan.jpeg */
    -webkit-overflow-scrolling: touch;
  }
</style>
