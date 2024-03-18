import type { EntryGenerator, PageServerLoad } from './$types';
import type {} from './$types';

export const load = (async ({ params }) => {
  console.log(params);

  return { foo: params.foo };
}) satisfies PageServerLoad;

export const entries: EntryGenerator = () => {
  return [{ foo: 'hello-world' }, { foo: 'another-blog-post' }];
};
