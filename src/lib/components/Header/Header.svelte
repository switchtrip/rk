<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { AppBar } from "@skeletonlabs/skeleton";
  import { initializeStores } from "@skeletonlabs/skeleton";
  import logo from "$lib/assets/surabhi_trademark_nobg.png";
  import { Menu, X, icons } from "lucide-svelte";
  import { Drawer, getDrawerStore } from "@skeletonlabs/skeleton";
  import Navigation from "$lib/navigation/Navigation.svelte";
  import social from "$lib/data/social.json";
  import { HeaderBg } from "./store";
  const drawerStore = getDrawerStore();

  // Drawer Handler
  function drawerOpen() {
    const s = {
      // id: "doc-sidenav",
      // bgDrawer: "bg-purple-900 text-white",
      // bgBackdrop:
      //   "bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50",
      width: "w-9/12 md:w-[480px]",
      padding: "p-0",
      position: "right",
    };
    drawerStore.open(s);
  }

  function drawerClose() {
    drawerStore.close();
  }
  let lastScrollTop = 0;
  let hidden = false;
  function handleScroll(e) {
    console.log(e);
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (scrollTop > lastScrollTop) {
      // downscroll code
      hidden = true;
    } else if (scrollTop < lastScrollTop) {
      // upscroll code
      hidden = false;
    } // else was horizontal scroll
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<AppBar
  class=" mx-auto py-2 fixed top-0 left-0 right-0 z-40 {hidden ? 'hidden' : ''}"
  background=""
>
  <!-- <AppBar class="py-2 top-0 left-0 right-0 backdrop-blur-sm z-40" background="{$HeaderBg}">  -->
  <svelte:fragment slot="lead">
    <a
      class="lg:!ml-0 lg:w-[82px] w-[60px] overflow-hidden"
      href="{base}/"
      title="Surabhi Homepage"
    >
      <!-- <img src={logo} alt="Surabhi" class="" /> -->
      <img src="{base}/images/surabhi_trademark_nobg.png" alt="Logo" class="" />
    </a>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <div class="flex sm:bg-primary-900/50 backdrop-blur-sm">
      <div class="hidden sm:flex ">
        <Navigation class="list-nav flex gap-1" />
      </div>
      <!-- Social -->
      <section class="inline-flex space-x-1">
        <a
          class="btn-icon hover:variant-soft-primary"
          href={social["instagram"]["href"]}
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands {social['instagram']['icon']} text-lg"></i>
        </a>
        <a
          class="btn-icon hover:variant-soft-primary"
          href={social["youtube1"]["href"]}
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands {social['youtube1']['icon']} text-lg"></i>
        </a>
        <button on:click={drawerOpen} class="btn-icon btn-icon-sm sm:!hidden">
          <Menu size="40" />
        </button>
      </section>
    </div>
  </svelte:fragment>
</AppBar>
