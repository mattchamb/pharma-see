import type { Atc1, Atc2, Atc3, Chemical, ScheduleRoot, Section } from '$lib/server/ScheduleTypes';

export interface ChemicalProjection {
  chemical: Chemical;
  section: Section;
  atc1: Atc1;
  atc2: Atc2;
  atc3: Atc3;
}

export class ScheduleAccessor {
  public chemicals;
  public sections;
  public atc1: Atc1[];
  public atc2: Atc2[];
  public atc3: Atc3[];

  constructor(public readonly root: ScheduleRoot) {
    this.chemicals = [...flattenChemicals(this.root)];
    this.sections = [...allSections(this.root)];
    this.atc1 = [...flattenAtc1(this.root)];
    this.atc2 = [...flattenAtc2(this.root)];
    this.atc3 = [...flattenAtc3(this.root)];
  }

  public getAtc1ById(id: string) {
    return this.atc1.find((x) => x.ID === id);
  }

  public getAtc2ById(id: string) {
    return this.atc2.find((x) => x.ID === id);
  }

  public getAtc3ById(id: string) {
    return this.atc3.find((x) => x.ID === id);
  }
}

function* allSections(schedule: ScheduleRoot) {
  for (const section of schedule.Schedule.Section) {
    yield {
      id: section.ID,
      name: section.Name,
      atc1: section.ATC1.map((x) => {
        return {
          id: x.ID,
          name: x.Name,
          atc2: x.ATC2.map((y) => {
            return {
              id: y.ID,
              name: y.Name
            };
          })
        };
      })
    };
  }
}

function* flattenAtc1(schedule: ScheduleRoot) {
  for (const section of schedule.Schedule.Section) {
    for (const atc1 of section.ATC1) {
      yield atc1;
    }
  }
}

function* flattenAtc2(schedule: ScheduleRoot) {
  for (const section of schedule.Schedule.Section) {
    for (const atc1 of section.ATC1) {
      for (const atc2 of atc1.ATC2) {
        yield atc2;
      }
    }
  }
}

function* flattenAtc3(schedule: ScheduleRoot) {
  for (const section of schedule.Schedule.Section) {
    for (const atc1 of section.ATC1) {
      for (const atc2 of atc1.ATC2) {
        for (const atc3 of atc2.ATC3) {
          yield atc3;
        }
      }
    }
  }
}

function* flattenChemicals(schedule: ScheduleRoot) {
  for (const section of schedule.Schedule.Section) {
    for (const atc1 of section.ATC1) {
      for (const atc2 of atc1.ATC2) {
        for (const atc3 of atc2.ATC3) {
          for (const chemical of atc3.Chemical) {
            yield {
              section,
              atc1,
              atc2,
              atc3,
              chemical
            } as ChemicalProjection;
          }
        }
      }
    }
  }
}
