import { latest } from '$lib/server/ScheduleData';
import type { EntryGenerator, PageServerLoad } from './$types';
import type {} from './$types';
import { error } from '@sveltejs/kit';
import type { ChemicalProjection } from '$lib/server/ScheduleAccessor';
import type { BreadcrumbLink } from '$lib/PageModels';

export const prerender = true;

interface PageModel {
  title: string;
  data: ChemicalProjection;
  crumbs: BreadcrumbLink[];
}

function projectChemical(chem: ChemicalProjection): PageModel {
  return {
    title: `Formulations of ${chem.chemical.Name}`,
    data: chem,
    crumbs: []
  };
}

export const load = (async ({ params }) => {
  const id = params.chemicalId;
  const chemical = latest.chemicals.find((x) => x.chemical.ID === id);
  if (!chemical) {
    error(404);
  }
  return projectChemical(chemical);
}) satisfies PageServerLoad;

export const entries: EntryGenerator = () => {
  return latest.chemicals.map((x) => ({ chemicalId: x.chemical.ID, ...projectChemical(x) }));
};
