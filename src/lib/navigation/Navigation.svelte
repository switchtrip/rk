<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { getDrawerStore } from "@skeletonlabs/skeleton";
  const links = [
    {
      href: base + "/",
      label: "Home",
      keywords: ["home", "surabhi", "main", "classes"],
    },
    {
      href: base + "/gallery",
      label: "Gallery",
      keywords: ["home", "surabhi", "main", "classes"],
    },
    {
      href: base + "/experiment",
      label: "Experiment",
      keywords: ["home", "surabhi", "main", "classes"],
    },
  ];
  $: listboxItemActive = (href) => $page.url.pathname == href ? "bg-primary-active-token" : "";
  export let classl = "";

  const drawerStore = getDrawerStore();
</script>

<nav>
  <ul class="list-nav {classl}">
    {#each links as link}
      <li>
        <a
          href={link.href}
          class={listboxItemActive(link.href)}
          data-sveltekit-preload-data="hover"
          on:click={drawerStore.close}
        >
          {link.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
