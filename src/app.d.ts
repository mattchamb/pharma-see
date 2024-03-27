// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { BreadcrumbLink } from '$lib/PageModels';

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      title: string;
      crumbs?: BreadcrumbLink[];
    }
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
