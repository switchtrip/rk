<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { AppBar } from "@skeletonlabs/skeleton";
  import { initializeStores } from "@skeletonlabs/skeleton";
  import logo from "$lib/assets/surabhi_trademark_nobg.png";
  import { Menu, X } from "lucide-svelte";
  import { Drawer, getDrawerStore } from "@skeletonlabs/skeleton";
  import Navigation from "$lib/navigation/Navigation.svelte";


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
    console.log(drawerStore);
    drawerStore.open(s);
  }

  function drawerClose() {
    drawerStore.close();
  }
  </script>
<AppBar class="py-1 z-20" shadow="shadow-2xl">
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
      <Navigation class="flex gap-1" />
    </div>
    <button on:click={drawerOpen} class="btn-icon btn-icon-sm sm:!hidden">
      <Menu />
    </button>
  </svelte:fragment>
</AppBar>