<script>
  /** @type {import('./$types').PageData} */
  //   export let data;
  import { base } from "$app/paths";
  import {
    Accordion,
    AccordionItem,
    Tab,
    TabGroup,
  } from "@skeletonlabs/skeleton";
  const classes = [];
  let tabSet = 0;

  const classInfo = [
    {
      title: "Harmonica",
      description:
        "Mouth Organ is a western Music Instrument also know as harmonica or harp. At Surabhi Music Academy we are teaching on Diatonic,Tremolo and chromatic harmonica.",
      classes: [
        {
          title: "Beginners",
          lessons: [
            "How to hold Harmonica",
            "Blowing technique",
            "Puckering",
            "Vibrato",
            "Different Alankars based on different taal",
          ],
        },
        {
          title: "Intermediate",
          lessons: [
            "Tongue Blocking / Tongue Slapping Techniques",
            "Bending",
            "Trills",
            "Playing Filmi Songs on mouth organ",
          ],
        },
        {
          title: "Advanced",
          lessons: [
            "Octave Playing",
            "Chords Playing",
            "Rhythm Techniques",
            "Bending and Overbending",
            "Playing songs on karaoke tracks etc.",
            "Hindustani Classical ragas on Harmonica",
          ],
        },
      ],
      images: [
        {
          url: `${base}/images/class-harmonica.webp`,
          title: "Mouth Organ offline class",
          timings: "Timings: Everty Saturday 10am - 12am",
        },
        {
          url: `${base}/images/class-zoom-harmonica.jpeg`,
          title: "Mouth Organ online class",
          timings: "Timings: Everty Saturday 10am - 12am",
        },
      ],
    },
    {
      title: "Flute",
      description:
        "At Surabhi music academy, we follow Pdt. Hariprasad Chaurasia's style of playing Hindustani Classical Music. Natural Bamboo flutes are used for training due to their superb acoustic and tonal qualities.",
      classes: [
        {
          title: "Beginners",
          lessons: [
            "How to hold flute, posture correction",
            "Blowing and fingering techniques",
            "Various Alankar and practice on Flute",
            "Playing Alankar on Flute with Tabla",
          ],
        },
        {
          title: "Intermediate",
          lessons: [
            "Meend and Gamak Techniques on Flute",
            "Playing Alankar in different Taals",
            "Introduction to Raagdari and playing raga on flute",
          ],
        },
        {
          title: "Advanced",
          lessons: [
            "Hindustani Classical Raga on Flute",
            "Proper demonstration of Alap, Jod & Composition playing with tabla",
            "Playing Filmi Songs based on Raga",
          ],
        },
      ],
      images: [
        {
          url: `${base}/images/flute-offline.jpg`,
          title: "Regular flute class",
          timings: "Timings: Everty Saturday 10am - 12am",
        },
        {
          url: `${base}/images/class-zoom-harmonica.jpeg`,
          title: "Online flute class",
          timings: "Timings: Everty Saturday 10am - 12am",
        },
      ],
    },
  ];
</script>

<div class="pt-10 p-4 sm:p-8 md:p-12 space-y-10 max-w-7xl mx-auto">
  <div id="classes" class="my-5 p-4 space-y-8">
    <h1 class="h1">Classes</h1>
    <p class="text-sm">
      Both offline and online classes are available for flute and mouth organ
    </p>
  </div>

  <TabGroup class="p-4">
    <Tab bind:group={tabSet} name="Harmonica" value={0}>
      <svelte:fragment slot="lead"></svelte:fragment>
      <span>Harmonica</span>
    </Tab>
    <Tab bind:group={tabSet} name="Flute" value={1}>
      <svelte:fragment slot="lead"></svelte:fragment>
      <span>Flute</span>
    </Tab>
    <!-- Tab Panels --->
    <svelte:fragment slot="panel">
      {#if tabSet === 0}
          <div class="space-y-4">
            <p class="">
              {classInfo[0]["description"]}
            </p>
            <Accordion>
              {#each classInfo[0]["classes"] as classes, index}
                <AccordionItem open={index==0?true:false}>
                  <svelte:fragment slot="lead">
                    {#if classes.title == 'Beginners'}
                      <i class="fa-sharp fa-solid fa-child min-w-[2ch]"></i>
                    {:else if classes.title == 'Intermediate'}
                    <i class="fa-solid fa-user-tie min-w-[2ch]"></i>
                    {:else}
                    <i class="fa-solid fa-hat-cowboy min-w-[2ch]"></i>
                    {/if}
                  </svelte:fragment>
                  <svelte:fragment slot="summary"
                    >{classes.title}</svelte:fragment
                  >
                  <svelte:fragment slot="content">
                    <ul class="space-y-2 list-disc text-surface-600-300-token">
                      {#each classes.lessons as lesson}
                        <li>{lesson}</li>
                      {/each}
                    </ul>
                    <hr />
                  </svelte:fragment>
                </AccordionItem>
              {/each}
            </Accordion>

            <div class="md:flex md:gap-3">
              {#each classInfo[0]["images"] as cl}
                <div class="my-10 pb-10 space-y-4 mx-auto w-full md:w-[40vw]">
                  <img
                    src={cl.url}
                    alt={cl.title}
                    class="mx-auto w-full aspect-square object-cover"
                  />
                  <h3 class="h3">{cl.title}</h3>
                  <p class="text-sm">{cl.timings}</p>
                </div>
              {/each}
            </div>
          </div>
      {:else if tabSet === 1}
          <div class="space-y-4">
            <p class="">
              {classInfo[1]["description"]}
            </p>
            <Accordion>
              {#each classInfo[1]["classes"] as classes, index}
                <AccordionItem open={index==0?true:false}>
                  <svelte:fragment slot="lead">
                    {#if classes.title == 'Beginners'}
                      <i class="fa-sharp fa-solid fa-child min-w-[2ch]"></i>
                    {:else if classes.title == 'Intermediate'}
                    <i class="fa-solid fa-user-tie min-w-[2ch]"></i>
                    {:else}
                    <i class="fa-solid fa-hat-cowboy min-w-[2ch]"></i>
                    {/if}
                  </svelte:fragment>
                  <svelte:fragment slot="summary"
                    >{classes.title}</svelte:fragment
                  >
                  <svelte:fragment slot="content">
                    <ul class="space-y-2 list-disc text-surface-600-300-token">
                      {#each classes.lessons as lesson}
                        <li>{lesson}</li>
                      {/each}
                    </ul>
                    <hr />
                  </svelte:fragment>
                </AccordionItem>
              {/each}
            </Accordion>

            <div class="md:flex md:gap-3">
              {#each classInfo[1]["images"] as cl}
                <div class="my-10 pb-10 space-y-4 mx-auto w-full md:w-[40vw]">
                  <img
                    src={cl.url}
                    alt={cl.title}
                    class="mx-auto w-full aspect-square object-cover"
                  />
                  <h3 class="h3">{cl.title}</h3>
                  <p class="text-sm">{cl.timings}</p>
                </div>
              {/each}
            </div>
          </div>
      {/if}
    </svelte:fragment>
  </TabGroup>
</div>
