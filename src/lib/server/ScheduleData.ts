import March2024Raw from './data/Schedule_2024-03.xml?raw';
import { XMLParser } from 'fast-xml-parser';
import { ScheduleAccessor } from '$lib/server/ScheduleAccessor';
import type { ScheduleRoot } from '$lib/server/ScheduleTypes';

const alwaysArray = [
  'Schedule.Section',
  'Schedule.Section.ATC1',
  'Schedule.Section.ATC1.ATC2',
  'Schedule.Section.ATC1.ATC2.ATC3',
  'Schedule.Section.ATC1.ATC2.ATC3.Chemical',
  'Schedule.Section.ATC1.ATC2.ATC3.Chemical.Formulation',
  'Schedule.Section.ATC1.ATC2.ATC3.Chemical.Formulation.Brand',
  'Schedule.Section.ATC1.ATC2.ATC3.Chemical.Formulation.Brand.Pack'
];

const parser = new XMLParser({
  removeNSPrefix: true,
  htmlEntities: false,
  ignoreAttributes: false,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  isArray: (_, jpath): boolean | undefined => {
    if (alwaysArray.indexOf(jpath) !== -1) {
      return true;
    }
    return undefined;
  },
  attributeNamePrefix: ''
});

export const March2024 = parser.parse(March2024Raw) as ScheduleRoot;
export const latest = new ScheduleAccessor(March2024);
