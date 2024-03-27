<script lang="ts">
  import type { PageServerData } from './$types';
  export let data: PageServerData;
</script>

<ul role="list" class="space-y-3">
  {#each data.sections as section}
    <li class="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
      <span class="text-xl font-semibold text-gray-500">{section.name}</span>
      <div class="mt-4 overflow-hidden rounded-md border border-gray-300 bg-white">
        <ul role="list" class="px-4 divide-y divide-gray-200">
          {#each section.atc1 as atc1}
            {#each atc1.atc2 as atc2}
              <li class="">
                <a class="py-4 block hover:bg-gray-50" href={`/sections/${atc2.id}`}>
                  {atc1.name} - {atc2.name}
                </a>
              </li>
            {/each}
          {/each}
        </ul>
      </div>
    </li>
  {/each}
</ul>
