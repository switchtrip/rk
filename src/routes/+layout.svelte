<script>
  import "../app.pcss";
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { AppShell } from "@skeletonlabs/skeleton";
  import logo from "$lib/assets/surabhi_trademark_nobg.png";
  import { initializeStores } from "@skeletonlabs/skeleton";
  import { Menu, X } from "lucide-svelte";
  import { Drawer, getDrawerStore } from "@skeletonlabs/skeleton";
  import Navigation from "$lib/navigation/Navigation.svelte";
  // import Footer from "$lib/components/Footer.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";
  import Header from "$lib/components/Header/Header.svelte";
  import { onMount } from "svelte";
  import social from '$lib/data/social.json';

  initializeStores();

  const drawerStore = getDrawerStore();

  // Drawer Handler
  function drawerClose() {
    drawerStore.close();
  }

  onMount(()=>{
  });
</script>

<svelte:head>
  <title>Surabhi Music Academy</title>
  <meta
    name="description"
    content="Testing Svelte app for Surabhi music app dev"
  />
  <!-- For sharing -->
  <meta property="og:title" content="Surabhi Music Academy" />
  <meta
    property="og:description"
    content="Learn Flute, Mouth organ, Hindustani classical Music"
  />
  <meta property="og:image" content="https://surabhimusic.com/logo" />
  <meta property="og:url" content="https://surabhimusic.com" />
  <link rel="canonical" href="https://surabhimusic.com/" />
</svelte:head>


<Drawer class="z-50">
  <div class="grid grid-rows-[1fr_auto_1fr] h-full">
    <button
      on:click={drawerClose}
      class="btn-icon btn-icon-sm absolute top-5 right-5"
    >
      <X />
    </button>
    <section class="row-start-2 space-y-4 overflow-y-auto">
      <Navigation class="grid [&>li>a]:block [&>li>a]:p-[4vh] [&>li>a]:text-center"/>
    </section>

    <section class="flex justify-center items-center gap-2 row-start-3 overflow-y-auto">
        {#each Object.entries(social) as [keys, sl]}
          <a
            class="btn-icon"
            href={sl.href}
            target="_blank"
            rel="noreferrer"
            title={sl.title}
          >
            <i class="fa-brands text-xl {sl.icon}" />
          </a>
        {/each}
    </section>

  </div>
</Drawer>

<Header />
	<slot />
<Footer />

<style>
</style>
