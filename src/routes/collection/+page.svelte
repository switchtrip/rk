<script>
  import { browser } from "$app/environment";

  import im1 from "$lib/assets/sir_sitting_MO_hd.png?enhanced";
  import im2 from "$lib/assets/sir_harmonica_flute_students.jpeg?enhanced";
  import im3 from "$lib/assets/flute_samjh.jpg?enhanced";

  const img_list = [im1, im2, im3];
</script>

<div class="collection-gradient">
  <div class="pt-24 p-4 sm:p-8 sm:pt-32 lg:pt-36 space-y-10 mx-auto max-w-7xl">
    <h1 class="h1 font-black space-y-8">Collections</h1>
  </div>

</div>

<style>
  .collection-gradient {
    background-image: radial-gradient(
        at 0% 0%,
        rgba(var(--color-secondary-500) / 0.33) 0px,
        transparent 50%
      ),
      radial-gradient(
        at 98% 1%,
        rgba(var(--color-error-500) / 0.33) 0px,
        transparent 50%
      );
  }
</style>
