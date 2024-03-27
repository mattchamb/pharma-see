<script lang="ts">
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<ul role="list" class="space-y-3">
  {#each data.atc3 as atc3}
    <li class="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
      <span class="text-xl font-semibold text-gray-500">{atc3.name}</span>
      <div class="mt-4 overflow-hidden rounded-md border border-gray-300 bg-white">
        <ul role="list" class="px-4 divide-y divide-gray-200">
          {#each atc3.chemicals as chem}
            <li class="">
              <a class="py-4 block hover:bg-gray-50" href={`/formulations/${chem.id}`}>
                {atc3.name} - {chem.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </li>
  {/each}
</ul>
