import { latest } from '$lib/server/ScheduleData';
import type { EntryGenerator, PageServerLoad } from './$types';
import type {} from './$types';
import { error } from '@sveltejs/kit';
import type { ChemicalProjection } from '$lib/server/ScheduleAccessor';
import type { BreadcrumbLink } from '$lib/PageModels';

export const prerender = true;

function selector(chem: ChemicalProjection) {
  return {
    chemicalId: chem.chemical.ID,
    title: `Formulations of ${chem.chemical.Name}`,
    formulations: chem.chemical.Formulation.map((form) => {
      return {
        id: form.ID,
        name: form.Name,
        units: form.Units,
        brands: form.Brand.map((brand) => {
          return {
            id: brand.ID,
            name: brand.Name,
            packs: brand.Pack.map((pack) => {
              return {
                id: pack.ID,
                price: pack.Price ?? 0,
                subsidy: pack.Subsidy ?? 0,
                quantity: pack.Quantity
              };
            })
          };
        })
      };
    }),
    crumbs: []
  };
}

export const load = (async ({ params }) => {
  const id = params.chemicalId;
  const chemical = latest.chemicals.find((x) => x.chemical.ID === id);
  if (!chemical) {
    error(404);
  }
  return selector(chemical);
}) satisfies PageServerLoad;

export const entries: EntryGenerator = () => {
  return latest.chemicals.map(selector);
};
