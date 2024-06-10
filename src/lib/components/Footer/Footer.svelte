<script>
  // Logo
  import { base } from "$app/paths";
  import logo from "$lib/assets/surabhi_trademark_nobg.png";
  import Navigation from "$lib/navigation/Navigation.svelte";
  import { Phone } from "lucide-svelte";
  import Address from "$lib/components/Footer/Address.svelte";
  import social from '$lib/data/social.json';
  // Base Classes
  const cBase =
    "bg-surface-50 dark:bg-surface-900 border-t border-surface-500/10 text-xs md:text-base";
  // const cRowOne = "flex justify-between items-center space-y-5";
  const cRowOne = 'flex flex-col md:flex-row justify-between items-center md:items-end space-y-5 md:space-y-0';

  const cRowTwo =
    "flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0";

  // Social Icons
</script>

<div class="page-footer {cBase}">
  <div class="w-full max-w-7xl mx-auto p-4 py-6 md:py-24 space-y-10">
    <!-- Row 1 -->
    <section class={cRowOne}>
      <div class="grid justify-items-center gap-6">
        <!-- <img src={logo} alt="Surabhi" class="w-14" /> -->
      <img src="{base}/images/surabhi_trademark_nobg.png" alt="Logo" class="w-14" />
        <p class="!text-sm opacity-80">Flute and Harmonica Gurukul </p>
      </div>
      <!-- Current Version -->
      <div class="hidden md:grid justify-end">
          <div class="sm:block">
            <Navigation class="list-nav anchor flex gap-4" />
          </div>
        <!-- </div> -->
      </div>
    </section>

    <hr class="opacity-20" />

    <!-- Row 2 -->
    <section class={cRowTwo}>
      <div class="flex gap-6">
        {#each Object.entries(social) as [keys, sl]}
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
      <div class="text-center">
     <Address /></div>

      <article class="text-center my-4 space-y-4">
        <p>Click to call:</p>
        <div class="flex">
          <a
            class="opacity-90 hover:opacity-100 flex gap-1"
            href="tel:+919923155267"
          >
            <Phone class="size-4 md:size-6" />
            <span class="num">9923155267</span>
          </a>
          <span class="mx-4">|</span>
          <a
            class="opacity-90 hover:opacity-100 flex gap-1"
            href="tel:+918668204290"
          >
            <Phone class="size-4 md:size-6" />
            <span class="num">8668204290</span>
          </a>
        </div>
      </article>
      <a
        aria-label="Chat on WhatsApp"
        class="opacity-95 hover:opacity-100"
        href="https://wa.me/9923155267?text=I%20want%20to%20learn%20flute%2Fmouth%20organ%20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="Chat on WhatsApp" src="{base}/ChatOnWhatsAppButton/WhatsAppButtonGreenSmall.svg" />
      </a>
    </section>

    <section class="flex flex-wrap gap-2 justify-center">
      <div>&bull; &copy; 2024 Surabhi Music Academy &bull; </div>
      <div>Designed & Developed by&nbsp;<a class="anchor" href="https://www.linkedin.com/in/ritesh-kumar-9906921b3/" target="_blank">Ritesh Kumar</a></div>
    </section>
  </div>
</div>
