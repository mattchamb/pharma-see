import { latest } from '$lib/server/ScheduleData';

export const prerender = true;

export const load = () => {
  return { title: 'Sections', sections: latest.sections };
};
