<script lang="ts">
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<div class="px-4 sm:px-6 lg:px-8">
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-base font-semibold leading-6 text-gray-900">{data.name}</h1>
      <p class="mt-2 text-sm text-gray-700">some caption text</p>
    </div>
  </div>
  <div class="mt-8 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full">
          <thead class="bg-white">
            <tr>
              <th
                scope="col"
                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                >Brand</th
              >
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >Quantity</th
              >
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >Price</th
              >
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >Subsidy</th
              >
              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            {#each data.formulations as f (f.id)}
              <tr class="border-t border-gray-200">
                <th
                  colspan="5"
                  scope="colgroup"
                  class="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                  >{f.Name}</th
                >
              </tr>
              {#each f.Brand as brand (brand['@_ID'])}
                {#each brand.Pack as pack (pack['@_ID'])}
                  {@const asdf = pack.Price - pack.Subsidy}
                  <tr class="border-t border-gray-200">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"
                      >{brand.Name}</td
                    >
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >{pack.Quantity}</td
                    >
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${pack.Price}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >${pack.Subsidy}</td
                    >
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >${asdf.toFixed(2)}</td
                    >

                    <td
                      class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3"
                    >
                      <a href="#" class="text-indigo-600 hover:text-indigo-900"
                        >Edit<span class="sr-only">, Courtney Henry</span></a
                      >
                    </td>
                  </tr>
                {/each}
              {/each}
            {/each}
            <!-- More people... -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
