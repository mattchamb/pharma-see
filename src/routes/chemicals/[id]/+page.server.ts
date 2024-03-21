import { obj } from '$lib/server/asdf';
import type { EntryGenerator, PageServerLoad } from './$types';
import type {} from './$types';
export const prerender = true;

export const load = (async ({ params }) => {
  const id = params.id;
  for (const chemical of aa()) {
    if (chemical.id === id) {
      return chemical;
    }
  }
  return null;
}) satisfies PageServerLoad;

export const entries: EntryGenerator = () => {
  return [...aa()];
};

function* aa() {
  for (const section of obj.Schedule.Section) {
    for (const atc1 of section.ATC1) {
      for (const atc2 of atc1.ATC2) {
        for (const atc3 of atc2.ATC3) {
          for (const c of atc3.Chemical) {
            yield {
              id: c['@_ID'],
              name: c.Name,
              section: section.Name,
              atc1: atc1.Name,
              atc2: atc2.Name,
              atc3: atc3.Name,
              formulations: c.Formulation
            };
          }
        }
      }
    }
  }
}
