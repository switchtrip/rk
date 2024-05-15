<script>
  import { Phone } from "lucide-svelte";
  import Address from "$lib/components/Footer/Address.svelte";
  import { base } from "$app/paths";
  /** @type {import('./$types').PageData} */
  // export let data;
</script>

<div class="pt-10 p-4 sm:p-8 md:p-24 space-y-10 max-w-7xl  mx-auto">

<div
  class="grid md:grid-cols-2 gap-4 justify-center md:justify-normal text-center
md:text-left pt-10 p-4 sm:p-8 md:p-12"
>
  <h1 class="h1 font-black md:col-span-2">Contact</h1>

  <div>
    <h2 class="h2 pb-4">Address:</h2>
    <Address />
  </div>

  <article class="my-4">
    <h2 class="h3 pb-4">Call the master:</h2>

    <div class="flex gap-5 justify-center md:justify-normal flex-wrap">
      <a
        class="btn btn-sm bg-gradient-to-br variant-gradient-primary-secondary flex gap-2 items-center"
        href="tel:+919923155267"
      >
        <Phone class="size-4 md:size-6" />
        <span class="num min-w-[10ch]">9923155267</span>
      </a>
      <!-- <span class="mx-4 py-0 text-4xl">|</span> -->
      <a
        class="btn btn-sm bg-gradient-to-br variant-gradient-primary-secondary flex gap-2 items-center"
        href="tel:+918668204290"
      >
        <Phone class="size-4 md:size-6" />
        <span class="num min-w-[10ch]">8668204290</span>
      </a>
    </div>
  </article>
<div class="">
    <h3 class="h3 pb-4">Email:</h3>
    <a class="no-underline anchor" href="mailto:sunilpatilpune@gmail.com"
      >sunilpatilpune@gmail.com</a
    ><br />
  </div>
  <div>
    <a
      aria-label="Chat on WhatsApp"
      class="btn w-max p-0"
      href="https://wa.me/9923155267?text=I%20want%20to%20learn%20flute%2Fmouth%20organ%20"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        alt="Chat on WhatsApp"
        src="{base}/ChatOnWhatsAppButton/WhatsAppButtonGreenSmall.svg"
      />
    </a>
  </div>
  
  <div class="max-w-[400px]">
    <iframe
      class="w-full aspect-square"
      title="Google map of Surabhi Music Academy"
      frameborder="no"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://maps.google.com/maps?width=100%25&amp;height=100&amp;hl=en&amp;q=surabhi%20music%20academy,%20Pune+(Surabhi%20Music%20Academy)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ><a href="https://www.gps.ie/">gps trackers</a></iframe
    >
  </div>
</div>
</div>
