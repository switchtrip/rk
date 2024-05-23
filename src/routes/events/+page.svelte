<script>
  /** @type {import('./$types').PageData} */
  // export let data;
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import Mycarousel from "$lib/components/Carousel/Mycarousel.svelte";
  import galleryList from "$lib/data/gallery.json";
  import { Tab, TabGroup } from "@skeletonlabs/skeleton";
  import { GalleryVertical, Images } from "lucide-svelte";
  import EventStructure from "./EventStructure.svelte";

  let tabSet = 0;
  onMount(() => {
    if ($page.url.searchParams.get("type") == "ws") {
      tabSet = 1;
    }
    if ($page.url.searchParams.get("type") == "ot") {
      tabSet = 2;
    }
  });

</script>

<div class="pt-24 p-4 sm:p-8 sm:pt-32 lg:pt-36 space-y-10 mx-auto max-w-7xl">
  <h1 class="h1 font-black">Events</h1>

    <TabGroup class="p-4">
      <Tab bind:group={tabSet} name="HF" value={0}>
        <svelte:fragment slot="lead"></svelte:fragment>
        <span>Harmonica Festivals</span>
      </Tab>
      <Tab bind:group={tabSet} name="WS" value={1}>
        <svelte:fragment slot="lead"></svelte:fragment>
        <span>Workshops</span>
      </Tab>
      <Tab bind:group={tabSet} name="OT" value={2}>
        <svelte:fragment slot="lead"></svelte:fragment>
        <span>Others</span>
      </Tab>
      <svelte:fragment slot="panel">
        {#if tabSet === 0}
          <!-- <ClassStructure classDetails={classInfo[0]}></ClassStructure> -->
          <EventStructure eventType={"HF"}></EventStructure>
        {:else if tabSet === 1}
          <EventStructure eventType={"WS"}></EventStructure>
          <!-- <ClassStructure classDetails={classInfo[1]}></ClassStructure> -->
        {:else if tabSet === 2}
          <EventStructure eventType={"OT"}></EventStructure>
            <!-- sdf -->
        {/if}
      </svelte:fragment>
    </TabGroup>
</div>

<style>
  .carousel-gradient {
     /* background-image:  */
     /* linear-gradient(rgba(var(--color-primary-500), rgba(var(--color-error-500)))) */
			/* radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%),
			radial-gradient(at 100% 100%,  rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%); */
			/* radial-gradient(at 90% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 90% 0%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%); */
	}
</style>