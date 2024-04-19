<script>
  import "../app.pcss";
  import { base } from '$app/paths';
</script>

<nav class="flex items-center justify-center gap-5 p-4 text-white bg-gradient-to-r from-slate-900 to-slate-500">
  <!-- <a href="{base}/">Home</a>
  <a href="{base}/gallery">Gallery</a> -->
  <a href="/">Home</a>
  <a href="/gallery">Gallery</a>
</nav>

<div class="bg-[#0e172a] min-h-screen pb-20">
  <div class="max-w-screen-xl p-5 m-auto">
    <slot></slot>
  </div>
</div>

<style>
</style>
