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
    gsap.from("#learn", {
      opacity: 0,
      duration: 2.5,
    });
    const st = { repeat: -1, repeatDelay: 1 };
    const tl = gsap.timeline(st);

    tl.to("h1 span", {
      text: "Flute",
      duration: 1,
      repeat: 1,
      repeatDelay: 1,
      yoyo: true,
    }, "start")
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
          backgroundImage: `url(${base}/images/anand_performing.jpeg)`,
          // backgroundImage: `url(${base}/images/sir_anand.jpeg)`,
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
<div
  class="mai w-full h-screen bg-cover bg-no-repeat bg-center"
>
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

<div id="students" class="mt-10 p-4 space-y-4">
  <h2 class="h2">Students Playing</h2>
  <div class="pt-10 flex flex-col md:flex-row gap-5">
    {#each studentsEmbedLink as student}
      <div class="w-full max-w-[400px] mx-auto">
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

<div id="about" class="my-20 p-4 space-y-8">
  <h2 class="h2">About the Academy</h2>
  <section class="space-y-4">
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
