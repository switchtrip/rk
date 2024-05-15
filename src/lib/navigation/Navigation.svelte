<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { getDrawerStore } from "@skeletonlabs/skeleton";
  const links = [
    {
      href: base + "/",
      label: "Home",
    },
    {
      href: base + "/classes",
      label: "Classes",
    },
    {
      href: base + "/events",
      label: "Events",
    },
    {
      href: base + "/collection",
      label: "Collection",
    },
    {
      href: base + "/contact",
      label: "Contact",
    },
  ];
  $: listboxItemActive = (href) =>
    $page.url.pathname == href ? "bg-primary-active-token" : "";

  const drawerStore = getDrawerStore();
</script>

<nav>
  <ul class="{$$restProps.class || ''}">
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
