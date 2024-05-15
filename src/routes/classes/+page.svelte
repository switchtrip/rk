<script>
  /** @type {import('./$types').PageData} */
  //   export let data;
  import { page } from "$app/stores";
  import { Tab, TabGroup } from "@skeletonlabs/skeleton";
  import classInfo from "$lib/data/classInfo.json";
  import ClassStructure from "./ClassStructure.svelte";
  import { onMount } from "svelte";
  const classes = [];
  let tabSet = 0;
  onMount(() => {
    if ($page.url.searchParams.get("type") == "flute") {
      tabSet = 1;
    }
  });
</script>

<div class="classes-gradient">
<div class="pt-24 p-4 sm:p-8 sm:pt-32 lg:pt-36 space-y-10 mx-auto max-w-7xl">
    <div id="classes" class="space-y-8">
      <h1 class="h1 font-black">Classes</h1>
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
      <svelte:fragment slot="panel">
        {#if tabSet === 0}
          <ClassStructure classDetails={classInfo[0]}></ClassStructure>
        {:else if tabSet === 1}
          <ClassStructure classDetails={classInfo[1]}></ClassStructure>
        {/if}
      </svelte:fragment>
    </TabGroup>
  </div>
</div>

<style>
  .classes-gradient {
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
