<script>
  import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";

  export let classDetails;
</script>

<div class="space-y-4">
  <p class="">
    {classDetails["description"]}
  </p>
  <Accordion>
    {#each classDetails["classes"] as classes, index}
      <AccordionItem open>
        <svelte:fragment slot="lead">
          {#if classes.title == "Beginners"}
            <i class="fa-sharp fa-solid fa-child min-w-[2ch]"></i>
          {:else if classes.title == "Intermediate"}
            <i class="fa-solid fa-user-tie min-w-[2ch]"></i>
          {:else}
            <i class="fa-solid fa-hat-cowboy min-w-[2ch]"></i>
          {/if}
        </svelte:fragment>
        <svelte:fragment slot="summary">{classes.title}</svelte:fragment>
        <svelte:fragment slot="content">
          <ul class="space-y-2 list-disc text-surface-600-300-token">
            {#each classes.lessons as lesson}
              <li>{lesson}</li>
            {/each}
          </ul>
          <hr />
        </svelte:fragment>
      </AccordionItem>
    {/each}
  </Accordion>

  <div class="md:flex md:gap-3">
    {#each classDetails["images"] as cl}
      <div class="my-10 pb-10 space-y-4 mx-auto w-full md:w-[40vw]">
        <img
          src={cl.url}
          alt={cl.title}
          class="mx-auto w-full aspect-square object-cover"
        />
        <h3 class="h3">{cl.title}</h3>
        <p class="text-sm">{cl.timings}</p>
      </div>
    {/each}
  </div>
</div>
