import { latest } from '$lib/server/ScheduleData';
import type { EntryGenerator, PageServerData, PageServerLoad } from './$types';
import type { BreadcrumbLink } from '$lib/PageModels';
import { error } from '@sveltejs/kit';
import type { Atc2 } from '$lib/server/ScheduleTypes';

export const prerender = true;

export interface PageModel {
  atc2: string;
  title: string;
  crumbs: BreadcrumbLink[];
  atc3: {
    id: string;
    name: string;
    chemicals: {
      id: string;
      name: string;
    }[];
  }[];
}

function selector(atc2: Atc2): PageServerData {
  return {
    atc2: atc2.ID,
    title: atc2.Name,
    crumbs: [],
    atc3: atc2.ATC3.map((atc3) => {
      return {
        id: atc3.ID,
        name: atc3.Name,
        chemicals: atc3.Chemical.map((chem) => {
          return {
            id: chem.ID,
            name: chem.Name
          };
        })
      };
    })
  };
}

export const load = (async ({ params }): Promise<PageModel> => {
  const id = params.atc2;
  const atc2 = latest.getAtc2ById(id);
  if (!atc2) {
    error(404);
  }
  return selector(atc2);
}) satisfies PageServerLoad;

export const entries: EntryGenerator = () => {
  return latest.atc2.map(selector);
};
