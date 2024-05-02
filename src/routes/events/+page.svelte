<script>
  import { base } from '$app/paths';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="pt-10 p-4 sm:p-8 md:p-12 space-y-10 max-w-7xl mx-auto">
  <div class="pt-10 p-4">
    <h1 class="h1">Events</h1>
  </div>

  <!-- <div class="max-w-96 border-2 border-white p-4 grid grid-rows-3 justify-items-center"> -->
  <div
    class="max-w-96 p-4 flex flex-col gap-10 items-center"
  >
    <p class="text-sm space-x-3">
      <span>Mouth Organ </span>
      <span>Flute </span>
      <span>Classical </span>
    </p>
    <h1 class="font-[Palatine] text-6xl text-[#edaa40] leading-none">Surabhi</h1>
    <h4 class="text-lg text-[#edaa40]/40 -mt-10 leading-3">Music Academy</h4>
    <img src="{base}/images/seprator_flute.png" alt="Flute"/>
    <h2 class="font-bold text-primary-600 -mt-5">Shri Sunil Patil</h2>
  </div>
</div>