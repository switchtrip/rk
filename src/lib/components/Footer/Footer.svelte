<script>
  // Logo
  import { base } from "$app/paths";
  import logo from "$lib/assets/surabhi_trademark_nobg.png";
  import Navigation from "$lib/navigation/Navigation.svelte";
  import {
    Phone,
  } from "lucide-svelte";
  import { siSimpleicons, siFacebook } from "simple-icons";

  console.log(siSimpleicons);
  // Base Classes
  const cBase =
    "bg-surface-50 dark:bg-surface-900 border-t border-surface-500/10 text-xs md:text-base";
  const cRowOne =
    "flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0";
  const cRowTwo =
    "flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0";

  // Social Icons
  const socialLinks = [
    {
      title: "Instagram",
      href: "https://www.instagram.com/sunilpatilpune",
      icon: "fa-instagram",
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com/people/Surabhi-Music-Academy/100063698980654/",
      icon: "fa-facebook",
    },
    {
      title: "YouTube Academy",
      href: "https://www.youtube.com/@surabhimusic6581",
      icon: "fa-youtube",
    },
    {
      title: "YouTube Sunil Patil",
      href: "https://www.youtube.com/@surabhimusic",
      icon: "fa-youtube",
    },
  ];
</script>

<div class="page-footer {cBase}">
  <div class="w-full max-w-7xl mx-auto p-4 py-6 md:py-24 space-y-10">
    <!-- Row 1 -->
    <section class="{cRowOne}">
      <img src={logo} alt="Surabhi" class="w-10" />
        <p class="!text-sm opacity-80">Music Academy for flute and Harmonica</p>
        <!-- Current Version -->
      <div class="hidden md:grid grid-cols-3 gap-8">
        
        <div class="space-y-6">
          <h6 class="h6">Links</h6>
    <div class="hidden sm:block">
      <Navigation class="" />
    </div>
        
      </div>
    </section>

    <hr class="opacity-20" />

    <!-- Row 2 -->
    <section class={cRowTwo}>
      <div class="flex gap-6">
        {#each socialLinks as sl}
          <a
            class="opacity-75 hover:opacity-100"
            href={sl.href}
            target="_blank"
            rel="noreferrer"
            title={sl.title}
          >
            <i class="fa-brands text-xl {sl.icon}" />
          </a>
        {/each}
      </div>
      <address class="text-center not-italic">
        <a
          href="https://maps.app.goo.gl/eCTb327uJZwrmbo48"
          class=""
          target="_blank"
          rel="noreferrer"
        >
          <span class="text-base font-black"> Surabhi Music Academy</span><br />
          B/B-2, Katepuram (Phase 1), <br />
          New Sangvi, Pimple Gurav <br />
          Pune, Maharashtra-411061 <br />
          <br /></a
        >
      </address>
      Click to call:
      <br />
      <section class="flex">
        <a
          class="opacity-90 hover:opacity-100 flex gap-1"
          href="tel:+919923155267"
        >
          <Phone size="12" />
          <span class="num">9923155267</span>
        </a>
        <span class="mx-4">|</span>
        <a
          class="opacity-90 hover:opacity-100 flex gap-1"
          href="tel:+918668204290"
        >
          <Phone size="12" />
          <span class="num">8668204290</span>
        </a>
      </section>
      <a
        aria-label="Chat on WhatsApp"
        class="opacity-95 hover:opacity-100"
        href="https://wa.me/9923155267?text=I%20want%20to%20learn%20flute%2Fmouth%20organ%20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="Chat on WhatsApp" src="images/WhatsAppButtonGreenSmall.svg" />
      </a>
    </section>
  </div>
</div>
