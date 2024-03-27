export interface ScheduleRoot {
  '?xml': XML;
  Schedule: Schedule;
}

export interface XML {
  version: string;
  encoding: string;
}

export interface Schedule {
  Front: Front;
  Section: Section[];
  schemaLocation: string;
}

export interface Front {
  Title: string;
  Country: string;
  Edition: string;
  Volume: number;
  Number: number;
  Published: Date;
}

export interface Section {
  Name: string;
  ATC1: Atc1[];
  ID: string;
}

export interface Atc1 {
  Name: string;
  ATC2: Atc2[];
  ID: string;
}

export interface Atc2 {
  Name: string;
  ATC3: Atc3[];
  ID: string;
  div?: FriskyDiv[] | MischievousDiv;
  Rule?: ATC2Rule;
  Request?: ATC2Request;
}

export interface Atc3 {
  Name: string;
  Chemical: Chemical[];
  ID: string;
  Request?: ATC3Request;
  Rule?: ATC3Rule;
  div?: ATC3Div;
}

export interface Chemical {
  Name: string;
  Formulation: Formulation[];
  ID: string;
  Statim?: Statim;
  Rule?: FluffyRule[] | FluffyRule;
  Request?: ChemicalRequest;
  div?: IndigoDiv[] | IndecentDiv;
  Update?: string;
}

export enum Statim {
  May = 'May',
  Must = 'Must'
}

export interface Formulation {
  Name: string;
  Brand: Brand[];
  ID: string;
  Rank: string;
  Units: Units;
  Weight?: string;
  Rule?: FluffyRule[] | FluffyRule;
  div?: FormulationDiv;
  Request?: FormulationRequest;
  Statim?: Statim;
  Update?: string;
}

export enum Units {
  Amp = 'amp',
  Cap = 'cap',
  Dev = 'dev',
  Dose = 'dose',
  Ea = 'ea',
  Each = 'each',
  Empty = '',
  En = 'en',
  Fee = 'fee',
  G = 'g',
  Inf = 'inf',
  Inj = 'inj',
  Iu = 'iu',
  Kit = 'kit',
  Loz = 'loz',
  Mg = 'mg',
  Ml = 'ml',
  Neb = 'neb',
  Pack = 'pack',
  Patch = 'patch',
  Pess = 'pess',
  Piece = 'piece',
  Sach = 'sach',
  Set = 'set',
  Sets = 'sets',
  Strip = 'strip',
  Supp = 'supp',
  Tab = 'tab',
  Test = 'test',
  Tube = 'tube',
  Txpk = 'txpk',
  UnitsInj = 'Inj',
  UnitsTab = 'Tab',
  Vial = 'vial'
}

export interface Brand {
  Name: string;
  Pack: Pack[];
  ID: string;
  Rule?: ATC3Rule[] | PurpleRule;
  S29?: string;
  PSS?: Date;
  ToBeDelisted?: Date;
  ToBePSS?: Date;
  SoleSupply?: Date;
  S26?: string;
  Update?: string;
}

export interface Pack {
  Quantity: number;
  Subsidy?: number;
  Price?: number;
  Alternate?: number;
  Surcharge?: number;
  ID: string;
  Specified?: string;
  ctpp_id?: string;
  OP?: string;
  Multiple?: number;
  CBS?: string;
}

export interface ATC3Rule {
  Type: Type;
  Value?: string;
  Attribute?: For;
  NonPrinting?: string;
}

export enum For {
  BSFNoumedDexamfetamine = 'BSF Noumed Dexamfetamine',
  Bso = 'BSO',
  Endorsement = 'Endorsement',
  Hospital = 'Hospital',
  Hp3 = 'HP3',
  Hp4 = 'HP4',
  Only = 'only',
  Pharmacist = 'Pharmacist',
  Price = 'Price',
  Pso = 'PSO',
  Retail = 'Retail',
  Rx = 'Rx',
  SpecialAuthority = 'Special Authority',
  Subsidy = 'Subsidy',
  Wockhardt = 'Wockhardt',
  Xpharm = 'Xpharm'
}

export enum Type {
  Alternate = 'Alternate',
  Brandswitch = 'Brandswitch',
  Combined = 'Combined',
  Contraceptive = 'Contraceptive',
  Controlled = 'Controlled',
  Dispensary = 'Dispensary',
  DoseDMax = 'DoseDMax',
  DoseSWt = 'DoseSWt',
  DoseWMax = 'DoseWMax',
  FormBan = 'FormBan',
  FormMax = 'FormMax',
  FormReqd = 'FormReqd',
  FormWt = 'FormWt',
  MaxCoPayment = 'MaxCoPayment',
  NotCombined = 'NotCombined',
  Pct = 'PCT',
  ProvAllow = 'ProvAllow',
  Rfpp = 'RFPP',
  SafetyListMedicine = 'SafetyListMedicine',
  SpecEnd = 'SpecEnd',
  Special = 'Special',
  SubRxF = 'SubRxF',
  TreatMax = 'TreatMax',
  Wastage = 'Wastage'
}

export interface PurpleRule {
  Type: Type;
}

export interface FormulationRequest {
  Title: PurpleTitle;
  Case: PurpleCase[] | FluffyCase;
  div?: PurpleDiv;
  To: To;
  For: PurpleFor;
  Form: string;
}

export enum PurpleFor {
  ManufacturersPrice = 'Manufacturers Price',
  Subsidy = 'Subsidy'
}

export enum To {
  HealthPAC = 'HealthPAC',
  HepatitisCTreatmentPanelHepCTP = 'Hepatitis C Treatment Panel (HepCTP)'
}

export interface PurpleCase {
  math: PurpleMath;
  Applicant: Array<ApplicantClass | string> | PurpleApplicant;
  Term: Term;
  When: When;
  Category?: string;
  div?: PurpleDiv;
  Form?: string;
}

export enum When {
  InitialApplication = 'Initial application',
  Renewal = 'Renewal'
}

export interface ApplicantClass {
  '#text': Applicant;
  Referring: string;
}

export enum Applicant {
  AnyRelevantPractitioner = 'any relevant practitioner',
  Dietitian = 'dietitian',
  GeneralPractitioner = 'general practitioner',
  MedicalPractitioner = 'medical practitioner',
  NursePractitioner = 'nurse practitioner',
  Practitioner = 'Practitioner',
  RenalPhysician = 'renal physician'
}

export enum PurpleApplicant {
  AnyRelevantPractitioner = 'any relevant practitioner',
  AnySpecialist = 'any specialist',
  Dermatologist = 'dermatologist',
  Haematologist = 'haematologist',
  MedicalOncologist = 'medical oncologist',
  MedicalPractitioner = 'medical practitioner',
  MetabolicPhysician = 'metabolic physician',
  Neurologist = 'neurologist',
  Ophthalmologist = 'ophthalmologist',
  RelevantSpecialist = 'relevant specialist',
  RespiratorySpecialist = 'respiratory specialist',
  Rheumatologist = 'rheumatologist'
}

export interface Term {
  '#text'?: number;
  Measure: Measure;
}

export enum Measure {
  Month = 'month',
  PatientSLifetime = "patient's lifetime",
  Week = 'week',
  Year = 'year'
}

export interface PurpleDiv {
  p: string;
  class: DivClass;
}

export enum DivClass {
  Note = 'Note',
  Xref = 'Xref'
}

export interface PurpleMath {
  apply?: PurpleApply;
  ci?: MathCi;
}

export interface PurpleApply {
  and?: string;
  ci: MathCi[] | MathCi;
  apply?: FluffyApply;
  or?: string;
}

export interface FluffyApply {
  or: string;
  ci: MathCi[];
}

export interface MathCi {
  '#text': string;
  type: CiType;
  class?: CiClass;
  msup?: Msup;
}

export enum CiClass {
  ClassIndication = 'indication',
  ClassTrial = 'trial',
  ClassUse = 'use',
  Details = 'Details',
  Endorsement = 'Endorsement',
  Indication = 'Indication',
  Target = 'Target',
  Test = 'Test',
  Therapy = 'Therapy',
  Treatment = 'Treatment',
  Trial = 'Trial',
  Use = 'Use'
}

export enum CiType {
  Logical = 'logical',
  Text = 'text'
}

export interface Msup {
  mi: MiEnum | number;
  mo: number;
}

export enum MiEnum {
  CM = 'cm'
}

export interface FluffyCase {
  math: FluffyMath;
  Applicant: Array<ApplicantClass | string> | Applicant;
  Term: PurpleTerm;
  When: When;
}

export interface PurpleTerm {
  Measure: Measure;
}

export interface FluffyMath {
  apply?: TentacledApply;
  ci?: MathCi;
}

export interface TentacledApply {
  or?: string;
  ci: MathCi[];
  and?: string;
  apply?: FluffyApply;
}

export interface PurpleTitle {
  range: string;
}

export interface FluffyRule {
  Type: Type;
  Value?: string;
  Attribute?: For;
  href?: string;
  NonPrinting?: string;
  Waiver?: Type;
}

export interface FormulationDiv {
  p?: string[] | DivPClass | string;
  class: DivClass;
  ol?: PurpleOl;
}

export interface PurpleOl {
  li: PurpleLi[];
  style: Style;
}

export enum Style {
  ListStyleTypeDecimal = 'list-style-type: decimal',
  ListStyleTypeLowerAlpha = 'list-style-type: lower-alpha',
  ListStyleTypeLowerRoman = 'list-style-type: lower-roman',
  ListStyleTypeUpperAlpha = 'list-style-type: upper-alpha'
}

export interface PurpleLi {
  p: string[] | string;
  h4?: string;
  ol?: FluffyOl[];
}

export interface FluffyOl {
  li: FluffyLi[];
  style: Style;
}

export interface FluffyLi {
  p: string;
  ol?: TentacledOl;
}

export interface TentacledOl {
  li: TentacledLi[];
  style: Style;
}

export interface TentacledLi {
  p: string;
  ol?: StickyOl;
}

export interface StickyOl {
  li: ULLi[];
  style: Style;
}

export interface ULLi {
  p: string;
}

export interface DivPClass {
  '#text': string;
  type?: PType;
  href?: string;
  a?: A;
}

export enum PType {
  Simple = 'simple'
}

export interface A {
  '#text': string;
  href: string;
}

export interface ChemicalRequest {
  Title: FluffyTitle;
  Case: TentacledCase[] | StickyCase;
  To: To;
  For: FluffyFor;
  Form: string;
  div?: PurpleDiv[] | StickyDiv;
  Confidential?: string;
}

export enum FluffyFor {
  Subsidy = 'Subsidy',
  WaiverOfRule = 'Waiver of Rule'
}

export interface TentacledCase {
  math: TentacledMath;
  Applicant: Array<ApplicantClass | string> | PurpleApplicant;
  Term: Term;
  When: When;
  Form?: string;
  Lapse?: Term;
  Category?: string;
  div?: FluffyDiv;
  History?: History;
  Break?: string;
}

export interface History {
  Term: Term;
  Maximum: number;
}

export interface FluffyDiv {
  p?: Array<PurpleP | string> | string;
  class: DivClass;
  style?: string;
  ol?: StickyOl;
  ul?: UL;
}

export interface PurpleP {
  sup: number[];
  '#text': string;
}

export interface UL {
  li: ULLi[];
}

export interface TentacledMath {
  ci?: MathCi;
  apply?: StickyApply;
}

export interface StickyApply {
  and?: string;
  ci?: MathCi[] | MathCi;
  apply?: IndigoApply[] | MagentaApply;
  or?: string;
  mi?: MiClass;
}

export interface IndigoApply {
  or?: OrClass | string;
  ci?: MathCi[] | MathCi;
  apply?: IndecentApply[] | HilariousApply;
  and?: string;
}

export interface IndecentApply {
  or?: string;
  ci: MathCi[] | MathCi;
  and?: string;
  apply?: TentacledApply;
}

export interface HilariousApply {
  or?: string;
  ci: MathCi[] | MathCi;
  and?: string;
  apply?: AmbitiousApply[] | CunningApply;
}

export interface AmbitiousApply {
  and: string;
  ci: PurpleCi[];
}

export interface PurpleCi {
  '#text': string;
  type: CiType;
}

export interface CunningApply {
  or?: string;
  ci: MathCi[];
  and?: string;
}

export interface OrClass {
  style: string;
}

export interface MagentaApply {
  or?: string;
  ci?: MathCi[] | MathCi;
  apply?: PurpleApply[] | FriskyApply;
  and?: string;
  mi?: MiClass;
}

export interface FriskyApply {
  and?: string;
  ci: MathCi[] | MathCi;
  apply?: MischievousApply;
  or?: string;
  mi?: MiClass;
}

export interface MischievousApply {
  or?: string;
  ci: MathCi[] | PurpleCi;
  apply?: AmbitiousApply;
  and?: string;
}

export interface MiClass {
  '#text': string;
  class: string;
}

export interface StickyCase {
  math: StickyMath;
  Applicant: Array<ApplicantClass | string> | PurpleApplicant;
  Term: Term;
  When: When;
  div?: TentacledDiv;
  Category?: string;
  Form?: string;
}

export interface TentacledDiv {
  p?: Array<TentacledP | string> | string;
  ol?: IndigoOl;
  class: DivClass;
}

export interface IndigoOl {
  li: ULLi[] | StickyLi;
  style: Style;
}

export interface StickyLi {
  p: Array<FluffyP | string>;
}

export interface FluffyP {
  a: A;
}

export interface TentacledP {
  a: A;
  '#text': string;
}

export interface StickyMath {
  ci?: MathCi;
  apply?: BraggadociousApply;
}

export interface BraggadociousApply {
  and?: string;
  ci: MathCi[] | MathCi;
  apply?: FluffyApply[] | FluffyApply;
  or?: string;
}

export interface FluffyTitle {
  range: PurpleRange | string;
}

export interface PurpleRange {
  instance: string[] | string;
  '#text': string;
}

export interface StickyDiv {
  p?: Array<TentacledP | string> | string;
  class: DivClass;
  ol?: StickyOl;
  style?: string;
}

export interface IndigoDiv {
  p: Array<DivPClass | string> | DivPClass | string;
  class: DivClass;
}

export interface IndecentDiv {
  p?: string[] | DivPClass | string;
  class: DivClass;
  ol?: StickyOl[] | IndecentOl;
}

export interface IndecentOl {
  li: IndigoLi[] | IndecentLi;
  style: Style;
}

export interface IndigoLi {
  p: string[] | string;
  h4?: string;
  ol?: HilariousOl;
}

export interface HilariousOl {
  li: TentacledLi[] | ULLi;
  style: Style;
}

export interface IndecentLi {
  p?: string;
  ol?: AmbitiousOl;
}

export interface AmbitiousOl {
  li: HilariousLi[];
  style: Style;
}

export interface HilariousLi {
  p: string;
  ol?: CunningOl;
}

export interface CunningOl {
  li: AmbitiousLi[];
  style: Style;
}

export interface AmbitiousLi {
  p: string;
  ol?: MagentaOl;
}

export interface MagentaOl {
  li: CunningLi[];
  style: Style;
}

export interface CunningLi {
  p: string[] | string;
  ol?: StickyOl;
}

export interface ATC3Request {
  Title: TentacledTitle;
  Case: IndigoCase[] | IndecentCase;
  To: To;
  For: TentacledFor;
  Form: string;
  div?: CunningDiv;
}

export enum TentacledFor {
  AlternateSubsidy = 'Alternate Subsidy',
  Subsidy = 'Subsidy'
}

export interface IndigoCase {
  math: IndigoMath;
  Applicant: Array<ApplicantClass | FluffyApplicant> | ApplicantClass | PurpleApplicant;
  Term: Term;
  When: When;
  Category?: string;
  Form?: string;
  div?: HilariousDiv;
}

export enum FluffyApplicant {
  Dietitian = 'dietitian',
  Gastroenterologist = 'gastroenterologist',
  MetabolicPhysician = 'metabolic physician',
  NursePractitioner = 'nurse practitioner',
  PaediatricNeurologist = 'paediatric neurologist',
  RelevantSpecialist = 'relevant specialist',
  VocationallyRegisteredGeneralPractitioner = 'vocationally registered general practitioner'
}

export interface HilariousDiv {
  p: string[] | string;
  class: DivClass;
}

export interface IndigoMath {
  apply?: Apply1;
  ci?: MathCi;
  overflow?: string;
}

export interface Apply1 {
  and?: string;
  ci: MathCi[] | MathCi;
  apply?: Apply2[] | Apply3;
  or?: string;
}

export interface Apply2 {
  or: string;
  mi: MiClass;
  ci: MathCi[];
}

export interface Apply3 {
  or?: string;
  ci: MathCi[] | MathCi;
  apply?: TentacledApply[] | FluffyApply;
  and?: string;
  mi?: MiClass;
}

export interface IndecentCase {
  math: IndecentMath;
  Applicant: Applicant;
  Term: PurpleTerm;
  div: AmbitiousDiv;
  When: When;
}

export interface AmbitiousDiv {
  p: string;
  ol: StickyOl;
  class: DivClass;
}

export interface IndecentMath {
  apply: Apply4;
}

export interface Apply4 {
  or: string;
  ci: MathCi;
  apply: TentacledApply;
}

export interface TentacledTitle {
  range: string[] | PurpleRange | string;
  '#text'?: string;
}

export interface CunningDiv {
  p: string[];
  ul: UL;
  class: DivClass;
}

export interface ATC3Div {
  p: string[] | DivPClass | string;
  class: DivClass;
  ul?: UL;
}

export interface ATC2Request {
  Title: StickyTitle;
  Case: HilariousCase[] | AmbitiousCase;
  To: To;
  For: For;
  Form: string;
  Confidential?: string;
}

export interface HilariousCase {
  math: PurpleMath;
  Applicant: Array<ApplicantClass | FluffyApplicant> | string;
  Term: Term;
  div?: MagentaDiv;
  When: When;
  Category?: string;
  Form?: string;
}

export interface MagentaDiv {
  p: string[];
  class: DivClass;
}

export interface AmbitiousCase {
  math: HilariousMath;
  Applicant: Applicant;
  Term: PurpleTerm;
  When: When;
}

export interface HilariousMath {
  apply: FluffyApply;
}

export interface StickyTitle {
  range: FluffyRange | string;
}

export interface FluffyRange {
  instance: string[];
  '#text': string;
}

export interface ATC2Rule {
  Type: Type;
  Value: string;
}

export interface FriskyDiv {
  p: DivPClass;
  class: DivClass;
}

export interface MischievousDiv {
  p: DivPClass | string;
  class: DivClass;
}
