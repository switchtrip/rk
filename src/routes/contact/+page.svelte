<script>
  import { Phone } from "lucide-svelte";

  /** @type {import('./$types').PageData} */
  // export let data;
</script>

<div class="pt-10 p-4 space-y-10">
  <h1 class="h1">Contact</h1>
  <address class="not-italic">
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
    <article class="my-4 space-y-4">
      <h3 class="h3">Click to call:</h3>
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
    Email:
    <a href="mailto:sunilpatilpune@gmail.com">sunilpatilpune@gmail.com</a>.<br
    />
  </address>
  <div class="mx-auto">
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
