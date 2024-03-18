<script lang="ts">
  import type { PageData, PageServerData } from './$types';

  export let data: PageServerData;

  export const prerender = true;

  console.log(data);
</script>

<h1>{data.foo}</h1>
