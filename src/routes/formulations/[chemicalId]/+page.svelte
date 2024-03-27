<script lang="ts">
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<div class="px-4 sm:px-6 lg:px-8">
  <div class="mt-8 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full">
          <thead class="bg-white">
            <tr>
              <th
                scope="col"
                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
              >
                Brand
              </th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Quantity
              </th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Price
              </th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Subsidy
              </th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Difference
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            {#each data.formulations as form (form.id)}
              <tr class="border-t border-gray-200">
                <th
                  colspan="5"
                  scope="colgroup"
                  class="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                >
                  {form.name}
                </th>
              </tr>
              {#each form.brands as brand (brand.id)}
                {#each brand.packs as pack (pack.id)}
                  {@const priceDifference = pack.price - pack.subsidy}
                  <tr class="border-t border-gray-200">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"
                    >
                      {brand.name}
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {pack.quantity}
                      {form.units}
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      ${pack.price.toFixed(2)}
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      ${pack.subsidy.toFixed(2)}
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      ${priceDifference.toFixed(2)}
                    </td>
                  </tr>
                {/each}
              {/each}
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
