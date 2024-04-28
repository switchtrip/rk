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
  const classes = [
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
  ];
  let tabSet = 0;
</script>

<div class="pt-10 p-4 sm:p-8 md:p-12 space-y-10 max-w-7xl mx-auto">
<div id="classes" class="my-5 p-4 space-y-5">
  <h1 class="h1 text-primary-600">Classes</h1>
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
      <div class="">
        <div class="space-y-4">
          <p class="">
            Mouth Organ is a western Music Instrument also know as harmonica or
            harp. At Surabhi Music Academy we are teaching on Diatonic,Tremolo
            and chromatic harmonica.
          </p>
          <Accordion>
            <AccordionItem open >
              <svelte:fragment slot="lead">
                <i class="fa-sharp fa-solid fa-child"></i>
              </svelte:fragment>
              <svelte:fragment slot="summary">Beginners</svelte:fragment>
              <svelte:fragment slot="content">
                <ul class="space-y-2">
                  <li>How to hold Harmonica</li>
                  <li>Blowing technique</li>
                  <li>Puckering</li>
                  <li>Vibrato</li>
                  <li>Different Alankars based on different taal</li>
                </ul>
              </svelte:fragment>
            </AccordionItem>
            <AccordionItem>
              <svelte:fragment slot="lead">
                <i class="fa-solid fa-user-tie"></i>
              </svelte:fragment>
              <svelte:fragment slot="summary">Intermediate</svelte:fragment>
              <svelte:fragment slot="content">
                <ul class="space-y-2">
                  <li>Tongue Blocking / Tongue Slapping Techniques </li>
                  <li>Bending </li>
                  <li>Trills</li>
                  <li>Playing Filmi Songs on mouth organ</li>
                </ul>
              </svelte:fragment>
            </AccordionItem>

            <AccordionItem>
              <svelte:fragment slot="lead">
                <i class="fa-solid fa-hat-cowboy"></i>
              </svelte:fragment>
              <svelte:fragment slot="summary">Advanced</svelte:fragment>
              <svelte:fragment slot="content">
                <ul class="space-y-2">
                    <li>Octave Playing</li>
                    <li>Double Stop</li>
                    <li>Rhythm Techniques</li>
                    <li>Playing songs on karaoke tracks etc.</li>
                    <li>Gamak Techniques (Indian Classical Phenomenon)</li>
                    <li>Hindustani Classical ragas on Harmonica, with alaap, jod and jhalas</li>
              </svelte:fragment>
            </AccordionItem>
          </Accordion>

          <div class="md:flex md:gap-3">
            {#each classes.slice(0, 2) as cl}
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
      </div>
    {:else if tabSet === 1}
      <div class="">
        <div class="space-y-4">
          <p class="">
            At Surabhi music academy, we follow Pdt. Hariprasad Chaurasia's
            style of playing Hindustani Classical Music. Natural Bamboo flutes
            are used for training due to their superb acoustic and tonal
            qualities.
          </p>
          <Accordion>
            <AccordionItem open>
              <svelte:fragment slot="lead">
                <i class="fa-sharp fa-solid fa-child"></i>
              </svelte:fragment>
              <svelte:fragment slot="summary">Beginners</svelte:fragment>
              <svelte:fragment slot="content">
                <ul class="space-y-2">
                  <li>Holding the flute</li>
                  <li>Blowing and fingering techniques</li>
                  <li>Various Alankar and practice on Flute</li>
                  <li>Playing Alankar on Flute with Tabla</li>
                </ul>
              </svelte:fragment>
            </AccordionItem>
            <AccordionItem>
              <svelte:fragment slot="lead">
                <i class="fa-solid fa-user-tie"></i>
              </svelte:fragment>
              <svelte:fragment slot="summary">Intermediate</svelte:fragment>
              <svelte:fragment slot="content">
                <ul class="space-y-2">
                  <li>Meend and Gamak Techniques on Flute</li>
                  <li>Playing Alankar in different Taals</li>
                  <li>Introduction to Raagdari and playing raga on flute</li>
                </ul>
              </svelte:fragment>
            </AccordionItem>

            <AccordionItem>
              <svelte:fragment slot="lead">
                <i class="fa-solid fa-hat-cowboy"></i>
              </svelte:fragment>
              <svelte:fragment slot="summary">Advanced</svelte:fragment>
              <svelte:fragment slot="content">
                <ul class="space-y-2">
                  <li>Hindustani Classical Raga on Flute</li>
                  <li>
                    Proper demonstration of Alap, Jod & Composition playing with
                    tabla
                  </li>
                  <li>Playing Filmi Songs based on Raga</li>
                </ul>
              </svelte:fragment>
            </AccordionItem>
          </Accordion>

          <div class="md:flex md:gap-3">
            {#each classes.slice(2, 4) as cl}
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
      </div>
    {/if}
  </svelte:fragment>
</TabGroup>

</div>