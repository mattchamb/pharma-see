<script>
  import '../app.css';
  import { page } from '$app/stores';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
</script>

<div class="min-h-full">
  <nav class="border-b border-gray-200 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="flex flex-shrink-0 items-center">
            <img
              class="block h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Pharma-See"
            />
          </div>
          <div class="flex -my-px ml-6 space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <a
              href="sections"
              class="border-indigo-500 text-gray-900 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="sections"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
            >
              Team
            </a>
            <a
              href="sections"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
            >
              Projects
            </a>
            <a
              href="sections"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
            >
              Calendar
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="py-5">
    <header>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {#if $page.data.crumbs}
          <Breadcrumbs crumbs={$page.data.crumbs} />
        {/if}
        <h1 class="pt-4 text-3xl font-bold leading-tight tracking-tight text-gray-900">
          {$page.data.title ?? ''}
        </h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
  </div>
</div>
