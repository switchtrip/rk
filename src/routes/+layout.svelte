<script>
  import "../app.pcss";
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { AppBar } from "@skeletonlabs/skeleton";
  import logo from "$lib/assets/surabhi_trademark_nobg.png";
  import { initializeStores } from "@skeletonlabs/skeleton";
  import { Menu, X } from "lucide-svelte";
  import { Drawer, getDrawerStore } from "@skeletonlabs/skeleton";
  import Navigation from "$lib/navigation/Navigation.svelte";
  initializeStores();

  const drawerStore = getDrawerStore();

  // Drawer Handler
  function drawerOpen() {
    const s = {
      id: "doc-sidenav",
      // bgDrawer: "bg-purple-900 text-white",
      // bgBackdrop:
      //   "bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50",
      width: "w-[280px] md:w-[480px]",
      padding: "p-0",
      position: "right",
    };
    drawerStore.open(s);
  }

  function drawerClose() {
    drawerStore.close();
  }

</script>

<Drawer>
  <div
    class="grid grid-rows-3 h-full"
  >
    <button
      on:click={drawerClose}
      class="btn-icon btn-icon-sm absolute top-5 right-5"
    >
      <X />
    </button>
    <!-- Nav Links -->
    <section class="row-start-2 p-4 pb-20 space-y-4 overflow-y-auto">
      <Navigation/>
    </section>
  </div>
</Drawer>
<AppBar class="py-1" shadow="shadow-2xl">
  <svelte:fragment slot="lead">
    <a
      class="lg:!ml-0 lg:w-[82px] w-[60px] overflow-hidden"
      href="{base}/"
      title="Surabhi Homepage"
    >
      <img src={logo} alt="Surabhi" class="" />
    </a>
  </svelte:fragment>
  <svelte:fragment slot="trail">
  <div class="hidden sm:block">
    <Navigation class="flex gap-1"/>
  </div>
    <button on:click={drawerOpen} class="btn-icon btn-icon-sm sm:!hidden">
      <Menu />
    </button>
  </svelte:fragment>
</AppBar>
<slot />

<style>
</style>
