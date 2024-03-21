import type { ScheduleRoot } from './ScheduleTypes';
import asdf from './data/Schedule_2024-03.xml?raw';
import { XMLParser } from 'fast-xml-parser';

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
  isArray: (name, jpath, isLeafNode, isAttribute): boolean | undefined => {
    if (alwaysArray.indexOf(jpath) !== -1) {
      return true;
    }
    return undefined;
  }
});

export const obj = parser.parse(asdf) as ScheduleRoot;
