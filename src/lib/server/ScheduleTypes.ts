export interface ScheduleRoot {
  '?xml': XML;
  Schedule: Schedule;
}

export interface XML {
  '@_version': number;
  '@_encoding': string;
}

export interface Schedule {
  Front: Front;
  Section: Section[];
  '@_xmlns:schedule': string;
  '@_xmlns:html': string;
  '@_xmlns:math': string;
  '@_xmlns': string;
  '@_xmlns:xsi': string;
  '@_xmlns:xlink': string;
  '@_xmlns:nzmt': string;
  '@_xsi:schemaLocation': string;
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
  ATC1: ATC1Element[];
  '@_ID': string;
}

export interface ATC1Element {
  Name: string;
  ATC2: ATC1ATC2Class[];
  '@_ID': string;
}

export interface ATC1ATC2Class {
  Name: string;
  ATC3: PurpleATC3[];
  '@_ID': string;
  Rule?: ATC2Rule;
  Request?: FriskyRequest;
}

export interface PurpleATC3 {
  Name: string;
  Chemical: PurpleChemical[];
  '@_ID': string;
  Request?: IndigoRequest;
  Rule?: BrandRuleClass;
  div?: IndigoDiv;
}

export interface PurpleChemical {
  Name: string;
  Formulation: PurpleFormulation[];
  '@_ID': string;
  '@_Statim'?: Statim;
  div?: IndigoDiv[] | IndecentDiv;
  Rule?: ChemicalRuleClass[] | ChemicalRuleClass;
  Request?: TentacledRequest;
  '@_Update'?: string;
}

export enum Statim {
  May = 'May',
  Must = 'Must'
}

export interface PurpleFormulation {
  Name: string;
  Brand: PurpleBrand[];
  '@_ID': string;
  '@_Rank': number;
  '@_Units': PurpleUnits;
  '@_Weight'?: number;
  '@_Statim'?: Statim;
  Rule?: ChemicalRuleClass[] | ChemicalRuleClass;
  div?: PurpleDiv;
  Request?: PurpleRequest;
  '@_Update'?: string;
}

export enum PurpleUnits {
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
  Mg = 'mg',
  Ml = 'ml',
  Neb = 'neb',
  Pack = 'pack',
  Patch = 'patch',
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

export interface PurpleBrand {
  Name: string;
  Pack: PurplePack[];
  '@_ID': string;
  Rule?: BrandRuleClass;
  '@_S29'?: boolean;
  '@_PSS'?: Date;
  '@_ToBeDelisted'?: Date;
  '@_ToBePSS'?: Date;
  '@_Update'?: string;
  '@_S26'?: boolean;
  '@_SoleSupply'?: Date;
}

export interface PurplePack {
  Quantity: number;
  Subsidy?: number;
  Price?: number;
  Alternate?: number;
  Surcharge?: number;
  '@_ID': string;
  '@_Specified'?: boolean;
  '@_OP'?: boolean;
  '@_nzmt:ctpp_id'?: number | string;
  Multiple?: number;
  '@_CBS'?: boolean;
}

export interface BrandRuleClass {
  '@_Type': Type;
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

export interface PurpleRequest {
  Title: PurpleTitle;
  Case: PurpleCase[] | FluffyCase;
  '@_To': To;
  '@_For': string;
  '@_Form': string;
}

export enum To {
  HealthPAC = 'HealthPAC',
  HepatitisCTreatmentPanelHepCTP = 'Hepatitis C Treatment Panel (HepCTP)'
}

export interface PurpleCase {
  math: PurpleMath;
  Applicant: string[] | PurpleApplicant;
  Term: Term;
  '@_When': When;
  '@_Form'?: string;
  '@_Category'?: string;
}

export enum When {
  InitialApplication = 'Initial application',
  Renewal = 'Renewal'
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
  Rheumatologist = 'rheumatologist'
}

export interface Term {
  '#text'?: number;
  '@_Measure': Measure;
}

export enum Measure {
  Month = 'month',
  PatientSLifetime = "patient's lifetime",
  Week = 'week',
  Year = 'year'
}

export interface PurpleMath {
  ci?: MathCi;
  '@_xmlns': string;
  apply?: PurpleApply;
}

export interface PurpleApply {
  and?: string;
  ci: MathCi[];
  apply?: FluffyApply;
  or?: string;
}

export interface FluffyApply {
  or: string;
  ci: MathCi[];
}

export interface MathCi {
  '#text': string;
  '@_type': TypeEnum;
  '@_class'?: Class;
  msup?: Msup;
}

export enum Class {
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

export enum TypeEnum {
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
  Applicant: Applicant;
  Term: PurpleTerm;
  '@_When': When;
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

export interface PurpleTerm {
  '@_Measure': Measure;
}

export interface FluffyMath {
  apply?: FluffyApply;
  '@_xmlns': string;
  ci?: MathCi;
}

export interface PurpleTitle {
  range: string;
}

export interface ChemicalRuleClass {
  '@_Type': Type;
  '@_Value'?: number | number;
  '@_Attribute'?: For;
  '@_NonPrinting'?: boolean;
  '@_xlink:href'?: string;
  '@_Waiver'?: Type;
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

export interface PurpleDiv {
  p?: string[] | DivPClass | string;
  '@_xmlns': string;
  '@_class': DivClass;
  ol?: OlOl;
  ul?: UL;
}

export enum DivClass {
  Note = 'Note',
  Xref = 'Xref'
}

export interface OlOl {
  li: ULLi[];
  '@_style': PurpleStyle;
}

export enum PurpleStyle {
  ListStyleTypeDecimal = 'list-style-type: decimal',
  ListStyleTypeLowerAlpha = 'list-style-type: lower-alpha',
  ListStyleTypeLowerRoman = 'list-style-type: lower-roman'
}

export interface ULLi {
  p: string;
}

export interface DivPClass {
  '#text': string;
  '@_xlink:type'?: XlinkType;
  '@_xlink:href'?: string;
  a?: A;
}

export enum XlinkType {
  Simple = 'simple'
}

export interface A {
  '#text': string;
  '@_href': string;
}

export interface UL {
  li: ULLi[];
}

export interface FluffyFormulation {
  Name: string;
  Brand: FluffyBrand[] | PurpleBrand;
  '@_ID': string;
  '@_Rank': number;
  '@_Units': PurpleUnits;
  '@_Weight'?: number;
  Rule?: ChemicalRuleClass[] | ChemicalRuleClass;
  div?: FluffyDiv;
  Request?: FluffyRequest;
  '@_Statim'?: Statim;
}

export interface FluffyBrand {
  Name: string;
  Pack: FluffyPack[] | PurplePack;
  '@_ID': string;
  Rule?: BrandRuleClass;
  '@_S29'?: boolean;
  '@_ToBeDelisted'?: Date;
  '@_ToBePSS'?: Date;
  '@_PSS'?: Date;
}

export interface FluffyPack {
  Quantity: number;
  Subsidy: number;
  Price: number;
  Alternate: number;
  Surcharge: number;
  '@_ID': string;
  '@_Specified'?: boolean;
  '@_nzmt:ctpp_id'?: string;
  '@_OP'?: boolean;
  Multiple?: number;
}

export interface FluffyRequest {
  Title: PurpleTitle;
  Case: TentacledCase[];
  div?: ATC2DivClass;
  '@_To': To;
  '@_For': For;
  '@_Form': string;
}

export interface TentacledCase {
  math: TentacledMath;
  Applicant: Applicant;
  Term: Term;
  '@_When': When;
  '@_Category'?: string;
  div?: ATC2DivClass;
  '@_Form'?: string;
}

export interface ATC2DivClass {
  p?: string;
  '@_xmlns': string;
  '@_class': DivClass;
  ol?: OlOl;
}

export interface TentacledMath {
  apply?: TentacledApply;
  '@_xmlns': string;
  ci?: MathCi;
}

export interface TentacledApply {
  and?: string;
  ci: MathCi[] | MathCi;
  apply?: FluffyApply;
  or?: string;
  mi?: MiClass;
}

export interface MiClass {
  '#text': string;
  '@_class': string;
}

export interface FluffyDiv {
  p?: string[] | string;
  '@_xmlns': string;
  '@_class': DivClass;
  ol?: PurpleOl;
  '@_style'?: string;
}

export interface PurpleOl {
  li: PurpleLi[] | TentacledLi;
  '@_style': FluffyStyle;
}

export enum FluffyStyle {
  ListStyleTypeDecimal = 'list-style-type: decimal',
  ListStyleTypeLowerAlpha = 'list-style-type: lower-alpha',
  ListStyleTypeUpperAlpha = 'list-style-type: upper-alpha'
}

export interface PurpleLi {
  p: string[] | string;
  h4?: string;
  ol?: FluffyOl;
}

export interface FluffyOl {
  li: FluffyLi[] | ULLi;
  '@_style': PurpleStyle;
}

export interface FluffyLi {
  p: string;
  ol?: OlOl;
}

export interface TentacledLi {
  p?: string;
  ol?: TentacledOl;
}

export interface TentacledOl {
  li: StickyLi[];
  '@_style': FluffyStyle;
}

export interface StickyLi {
  p: string;
  ol?: StickyOl;
}

export interface StickyOl {
  li: IndigoLi[];
  '@_style': PurpleStyle;
}

export interface IndigoLi {
  p: string;
  ol?: IndigoOl;
}

export interface IndigoOl {
  li: IndecentLi[];
  '@_style': PurpleStyle;
}

export interface IndecentLi {
  p: string[] | string;
  ol?: OlOl;
}

export interface TentacledRequest {
  Title: FluffyTitle;
  Case: StickyCase[] | IndigoCase;
  '@_To': To;
  '@_For': PurpleFor;
  '@_Form': string;
  div?: ATC2DivClass[] | StickyDiv;
  '@_Confidential'?: boolean;
}

export enum PurpleFor {
  Subsidy = 'Subsidy',
  WaiverOfRule = 'Waiver of Rule'
}

export interface StickyCase {
  math: StickyMath;
  Applicant: Array<ApplicantClass | string> | PurpleApplicant;
  Term: Term;
  '@_When': When;
  '@_Form'?: string;
  Lapse?: Term;
  '@_Category'?: string;
  div?: TentacledDiv;
  History?: PurpleHistory;
  '@_Break'?: string;
}

export interface ApplicantClass {
  '#text': Applicant;
  '@_Referring': string;
}

export interface PurpleHistory {
  Term: PurpleTerm;
  Maximum: number;
}

export interface TentacledDiv {
  p?: Array<PurpleP | string> | string;
  '@_xmlns': string;
  '@_class': DivClass;
  '@_style'?: string;
  ol?: OlOl;
  ul?: UL;
}

export interface PurpleP {
  sup: number[];
  '#text': string;
}

export interface StickyMath {
  ci?: MathCi;
  '@_xmlns': string;
  apply?: StickyApply;
}

export interface StickyApply {
  and?: string;
  ci?: MathCi[] | MathCi;
  apply?: IndigoApply[] | FriskyApply;
  or?: string;
  mi?: MiClass;
}

export interface IndigoApply {
  or?: OrClass | string;
  ci?: MathCi[] | MathCi;
  apply?: IndecentApply[] | AmbitiousApply;
  and?: string;
}

export interface IndecentApply {
  or?: string;
  ci: MathCi[] | MathCi;
  and?: string;
  apply?: HilariousApply;
}

export interface HilariousApply {
  and: string;
  ci: MathCi[];
}

export interface AmbitiousApply {
  or?: string;
  ci: MathCi[] | MathCi;
  and?: string;
  apply?: CunningApply[] | MagentaApply;
}

export interface CunningApply {
  and: string;
  ci: PurpleCi[];
}

export interface PurpleCi {
  '#text': string;
  '@_type': TypeEnum;
}

export interface MagentaApply {
  or?: string;
  ci: MathCi[];
  and?: string;
}

export interface OrClass {
  '@_style': string;
}

export interface FriskyApply {
  or?: string;
  ci?: MathCi[] | MathCi;
  and?: string;
  apply?: MischievousApply[] | BraggadociousApply;
  mi?: MiClass;
}

export interface MischievousApply {
  and: string;
  ci: MathCi[] | MathCi;
  apply?: FluffyApply;
}

export interface BraggadociousApply {
  or?: string;
  ci: MathCi[] | MathCi;
  and?: string;
  mi?: MiClass;
  apply?: Apply1;
}

export interface Apply1 {
  or?: string;
  ci: MathCi[] | PurpleCi;
  apply?: CunningApply;
  and?: string;
}

export interface IndigoCase {
  math: IndigoMath;
  Applicant: Array<ApplicantClass | string> | PurpleApplicant;
  Term: Term;
  div?: StickyDiv;
  '@_When': When;
  '@_Category'?: string;
}

export interface StickyDiv {
  p?: Array<FluffyP | string> | string;
  ol?: OlOl;
  '@_xmlns': string;
  '@_class': DivClass;
}

export interface FluffyP {
  a: A;
  '#text': string;
}

export interface IndigoMath {
  apply?: Apply2;
  '@_xmlns': string;
  ci?: MathCi;
}

export interface Apply2 {
  and?: string;
  ci: MathCi[] | MathCi;
  apply?: FluffyApply[] | FluffyApply;
  or?: string;
}

export interface FluffyTitle {
  range: PurpleRange | string;
}

export interface PurpleRange {
  instance: string;
  '#text': string;
}

export interface IndigoDiv {
  p: DivPClass | string;
  '@_xmlns': string;
  '@_class': DivClass;
}

export interface IndecentDiv {
  p?: string[] | DivPClass | string;
  '@_xmlns': string;
  '@_class': DivClass;
  ol?: OlOl[] | OlOl;
}

export interface FluffyChemical {
  Name: string;
  Rule?: ChemicalRuleClass[] | ChemicalRuleClass;
  Formulation: TentacledFormulation[] | StickyFormulation;
  '@_ID': string;
  '@_Statim'?: Statim;
  Request?: StickyRequest;
  div?: AmbitiousDiv[] | FluffyDiv;
}

export interface TentacledFormulation {
  Name: string;
  Brand: TentacledBrand[] | StickyBrand;
  '@_ID': string;
  '@_Rank': number;
  '@_Units': PurpleUnits;
  '@_Weight'?: number;
  Rule?: ChemicalRuleClass[] | ChemicalRuleClass;
  div?: ATC2DivClass;
  '@_Statim'?: Statim;
}

export interface TentacledBrand {
  Name: string;
  Pack: PurplePack;
  '@_ID': string;
  '@_PSS'?: Date;
  Rule?: BrandRuleClass;
  '@_S29'?: boolean;
}

export interface StickyBrand {
  Name: string;
  Pack: PurplePack[] | PurplePack;
  '@_ID': string;
  '@_PSS'?: Date;
  Rule?: ChemicalRuleClass[] | BrandRuleClass;
  '@_S29'?: boolean;
  '@_SoleSupply'?: Date;
  '@_S26'?: boolean;
}

export interface StickyFormulation {
  Name: string;
  Brand: IndigoBrand[] | IndecentBrand;
  '@_ID': string;
  '@_Rank': number;
  '@_Units': PurpleUnits;
  Rule?: ChemicalRuleClass[] | ChemicalRuleClass;
  '@_Weight'?: number;
  div?: FluffyDiv;
}

export interface IndigoBrand {
  Name: string;
  Pack: FluffyPack[] | FluffyPack;
  '@_ID': string;
  Rule?: BrandRuleClass;
  '@_S29'?: boolean;
  '@_ToBeDelisted'?: Date;
  '@_ToBePSS'?: Date;
}

export interface IndecentBrand {
  Name: string;
  Pack: PurplePack[] | PurplePack;
  '@_ID': string;
  '@_PSS'?: Date;
  '@_SoleSupply'?: Date;
}

export interface StickyRequest {
  Title: PurpleTitle;
  Case: IndecentCase[] | HilariousCase;
  '@_To': To;
  '@_For': For;
  '@_Form': string;
  div?: HilariousDiv;
}

export interface IndecentCase {
  math: IndecentMath;
  Applicant: Array<ApplicantClass | string> | PurpleApplicant;
  Term: Term;
  Lapse?: Term;
  '@_When': When;
  '@_Category'?: string;
  '@_Form'?: string;
  div?: FluffyDiv;
}

export interface IndecentMath {
  apply?: Apply3;
  '@_xmlns': string;
  ci?: MathCi;
}

export interface Apply3 {
  and?: string;
  ci?: MathCi[] | MathCi;
  apply?: Apply4[] | Apply5;
  or?: string;
}

export interface Apply4 {
  or?: string;
  ci?: MathCi[] | MathCi;
  and?: string;
  apply?: TentacledApply[] | TentacledApply;
}

export interface Apply5 {
  or?: string;
  ci: MathCi[] | MathCi;
  apply?: PurpleApply[] | Apply6;
  and?: string;
}

export interface Apply6 {
  and: string;
  ci: MathCi[];
  apply?: Apply7;
}

export interface Apply7 {
  or: string;
  ci: PurpleCi[];
}

export interface HilariousCase {
  math: HilariousMath;
  Applicant: Applicant;
  Term: PurpleTerm;
  '@_When': When;
  '@_Category'?: string;
}

export interface HilariousMath {
  ci?: MathCi;
  '@_xmlns': string;
  apply?: Apply8;
}

export interface Apply8 {
  and: string;
  ci: MathCi[] | MathCi;
  apply?: FluffyApply[] | FluffyApply;
}

export interface HilariousDiv {
  p: Array<FluffyP | string>;
  '@_xmlns': string;
  '@_class': DivClass;
}

export interface AmbitiousDiv {
  p: Array<DivPClass | string> | string;
  '@_xmlns': string;
  '@_class': DivClass;
}

export interface IndigoRequest {
  Title: TentacledTitle;
  Case: AmbitiousCase[] | CunningCase;
  '@_To': To;
  '@_For': FluffyFor;
  '@_Form': string;
  div?: CunningDiv;
}

export enum FluffyFor {
  AlternateSubsidy = 'Alternate Subsidy',
  Subsidy = 'Subsidy'
}

export interface AmbitiousCase {
  math: AmbitiousMath;
  Applicant: FluffyApplicant[] | PurpleApplicant;
  Term: Term;
  '@_When': When;
  '@_Category'?: string;
  '@_Form'?: string;
  div?: ATC2DivClass;
}

export enum FluffyApplicant {
  NursePractitioner = 'nurse practitioner',
  RelevantSpecialist = 'relevant specialist'
}

export interface AmbitiousMath {
  apply?: Apply9;
  '@_xmlns': string;
  ci?: MathCi;
}

export interface Apply9 {
  and?: string;
  ci: MathCi[] | MathCi;
  apply?: Apply10;
  or?: string;
}

export interface Apply10 {
  or?: string;
  ci: MathCi[] | MathCi;
  apply?: PurpleApply[];
  and?: string;
}

export interface CunningCase {
  math: CunningMath;
  Applicant: Applicant;
  Term: PurpleTerm;
  div: ATC2DivClass;
  '@_When': When;
}

export interface CunningMath {
  apply: Apply11;
  '@_xmlns': string;
}

export interface Apply11 {
  or: string;
  ci: MathCi;
  apply: PurpleApply;
}

export interface TentacledTitle {
  range: string[] | FluffyRange | string;
  '#text'?: string;
}

export interface FluffyRange {
  instance: string[];
  '#text': string;
}

export interface CunningDiv {
  p: string[];
  ul?: UL;
  '@_xmlns': string;
  '@_class': DivClass;
}

export interface FluffyATC3 {
  Name: string;
  Chemical: TentacledChemical[] | StickyChemical;
  '@_ID': string;
  div?: PurpleDiv;
  Rule?: ATC2Rule;
}

export interface TentacledChemical {
  Name: string;
  Formulation: IndigoFormulation[] | IndecentFormulation;
  '@_ID': string;
  '@_Statim'?: Statim;
  Rule?: ChemicalRuleClass[] | ChemicalRuleClass;
  Request?: AmbitiousRequest;
  div?: ATC2DivClass[] | FluffyDiv;
  '@_Update'?: string;
}

export interface IndigoFormulation {
  Name: string;
  Brand: HilariousBrand[] | AmbitiousBrand;
  '@_ID': string;
  '@_Rank': number;
  '@_Units': FluffyUnits;
  '@_Weight'?: number;
  Rule?: ChemicalRuleClass[] | ChemicalRuleClass;
  '@_Statim'?: Statim;
  div?: ATC2DivClass;
  Request?: IndecentRequest;
}

export enum FluffyUnits {
  Cap = 'cap',
  Dev = 'dev',
  Dose = 'dose',
  Ea = 'ea',
  G = 'g',
  Inj = 'inj',
  Loz = 'loz',
  Ml = 'ml',
  Patch = 'patch',
  Pess = 'pess',
  Piece = 'piece',
  Supp = 'supp',
  Tab = 'tab',
  UnitsTab = 'Tab'
}

export interface HilariousBrand {
  Name: string;
  Rule?: BrandRuleClass;
  Pack: FluffyPack[] | PurplePack;
  '@_ID': string;
  '@_S29'?: boolean;
  '@_PSS'?: Date;
  '@_ToBeDelisted'?: Date;
  '@_ToBePSS'?: Date;
  '@_Update'?: string;
}

export interface AmbitiousBrand {
  Name: string;
  Pack: PurplePack[] | PurplePack;
  '@_ID': string;
  '@_PSS'?: Date;
  Rule?: BrandRuleClass;
  '@_S29'?: boolean;
  '@_SoleSupply'?: Date;
  '@_ToBePSS'?: Date;
  '@_S26'?: boolean;
}

export interface IndecentRequest {
  Title: PurpleTitle;
  Case: MagentaCase[];
  '@_To': To;
  '@_For': For;
  '@_Form': string;
}

export interface MagentaCase {
  math: PurpleMath;
  Applicant: Array<ApplicantClass | string> | TentacledApplicant;
  Term: Term;
  '@_When': When;
  '@_Form'?: string;
  '@_Category'?: string;
}

export enum TentacledApplicant {
  AnyRelevantPractitioner = 'any relevant practitioner',
  PaediatricGastroenterologist = 'paediatric gastroenterologist'
}

export interface IndecentFormulation {
  Name: string;
  Brand: FluffyBrand[] | CunningBrand;
  '@_ID': string;
  '@_Rank': number;
  '@_Units': PurpleUnits;
  '@_Weight'?: number;
  Rule?: ChemicalRuleClass[] | ChemicalRuleClass;
  div?: ATC2DivClass;
  Request?: HilariousRequest;
  '@_Statim'?: Statim;
}

export interface CunningBrand {
  Name: string;
  Pack: PurplePack[] | PurplePack;
  '@_ID': string;
  '@_PSS'?: Date;
  '@_ToBePSS'?: Date;
  Rule?: BrandRuleClass;
  '@_S29'?: boolean;
  '@_ToBeDelisted'?: Date;
  '@_S26'?: boolean;
}

export interface HilariousRequest {
  Title: PurpleTitle;
  Case: FriskyCase;
  '@_To': To;
  '@_For': For;
  '@_Form': string;
}

export interface FriskyCase {
  math: MagentaMath;
  Applicant: Array<ApplicantClass | string>;
  Term: PurpleTerm;
  '@_When': When;
}

export interface MagentaMath {
  apply: HilariousApply;
  '@_xmlns': string;
}

export interface AmbitiousRequest {
  Title: StickyTitle;
  Case: MischievousCase[] | BraggadociousCase;
  '@_To': To;
  '@_For': PurpleFor;
  '@_Form': string;
  div?: FluffyDiv;
}

export interface MischievousCase {
  math: FriskyMath;
  Applicant: Array<ApplicantClass | string> | StickyApplicant;
  Term: Term;
  '@_When': When;
  '@_Category'?: string;
  '@_Form'?: string;
  div?: ATC2DivClass;
  History?: FluffyHistory;
}

export enum StickyApplicant {
  AnyRelevantPractitioner = 'any relevant practitioner',
  MedicalPractitioner = 'medical practitioner',
  RespiratorySpecialist = 'respiratory specialist'
}

export interface FluffyHistory {
  Term: Term;
  Maximum: number;
}

export interface FriskyMath {
  apply?: Apply12;
  '@_xmlns': string;
  ci?: MathCi;
}

export interface Apply12 {
  or?: string;
  ci?: MathCi[] | MathCi;
  and?: string;
  apply?: PurpleApply[] | Apply13;
}

export interface Apply13 {
  or?: string;
  ci: MathCi[] | MathCi;
  and?: string;
  apply?: MagentaApply;
}

export interface BraggadociousCase {
  math: MischievousMath;
  Applicant: Array<ApplicantClass | string> | Applicant;
  Term: Term;
  '@_When': When;
  '@_Category'?: string;
  '@_Form'?: string;
  div?: MagentaDiv;
}

export interface MagentaDiv {
  ol: IndecentOl;
  '@_xmlns': string;
  '@_class': DivClass;
}

export interface IndecentOl {
  li: HilariousLi;
  '@_style': PurpleStyle;
}

export interface HilariousLi {
  p: Array<TentacledP | string>;
}

export interface TentacledP {
  a: A;
}

export interface MischievousMath {
  apply?: Apply14;
  '@_xmlns': string;
  ci?: MathCi;
}

export interface Apply14 {
  or?: string;
  ci: MathCi[];
  and?: string;
  apply?: FluffyApply[] | FluffyApply;
}

export interface StickyTitle {
  range: FluffyRange | string;
}

export interface StickyChemical {
  Name: string;
  Rule?: ChemicalRuleClass[] | ChemicalRuleClass;
  Request?: MagentaRequest;
  Formulation: HilariousFormulation[] | AmbitiousFormulation;
  '@_ID': string;
  div?: ATC2DivClass;
  '@_Statim'?: Statim;
}

export interface HilariousFormulation {
  Name: string;
  Brand: MagentaBrand[] | FriskyBrand;
  '@_ID': string;
  '@_Rank': number;
  '@_Units': PurpleUnits;
  '@_Weight'?: number;
  Rule?: ChemicalRuleClass[] | ChemicalRuleClass;
  div?: ATC2DivClass;
}

export interface MagentaBrand {
  Name: string;
  Pack: PurplePack;
  '@_ID': string;
  '@_PSS'?: Date;
  Rule?: BrandRuleClass;
  '@_S29'?: boolean;
  '@_ToBeDelisted'?: Date;
  '@_Update'?: string;
}

export interface FriskyBrand {
  Name: string;
  Pack: FluffyPack[] | PurplePack;
  '@_ID': string;
  '@_PSS'?: Date;
}

export interface AmbitiousFormulation {
  Name: string;
  Brand: MischievousBrand[] | BraggadociousBrand;
  '@_ID': string;
  '@_Rank': number;
  '@_Units': PurpleUnits;
  Rule?: ChemicalRuleClass[] | ChemicalRuleClass;
  '@_Weight'?: number;
  Request?: CunningRequest;
}

export interface MischievousBrand {
  Name: string;
  Pack: FluffyPack;
  '@_ID': string;
  '@_S29'?: boolean;
}

export interface BraggadociousBrand {
  Name: string;
  Pack: FluffyPack[] | PurplePack;
  '@_ID': string;
  '@_PSS'?: Date;
  Rule?: BrandRuleClass;
  '@_S29'?: boolean;
  '@_S26'?: boolean;
}

export interface CunningRequest {
  Title: PurpleTitle;
  Case: Case1;
  '@_To': To;
  '@_For': For;
  '@_Form': string;
}

export interface Case1 {
  math: BraggadociousMath;
  Applicant: Applicant;
  Term: PurpleTerm;
  '@_When': When;
}

export interface BraggadociousMath {
  ci: MathCi;
  '@_xmlns': string;
}

export interface MagentaRequest {
  Title: PurpleTitle;
  Case: Case2[];
  '@_To': To;
  '@_For': For;
  '@_Form': string;
}

export interface Case2 {
  math: Math1;
  Applicant: Array<ApplicantClass | string> | PurpleApplicant;
  Term: Term;
  '@_When': When;
  '@_Form'?: string;
  '@_Category'?: string;
  div?: ATC2DivClass;
}

export interface Math1 {
  ci?: MathCi;
  '@_xmlns': string;
  apply?: Apply15;
}

export interface Apply15 {
  and?: string;
  ci: MathCi[] | MathCi;
  apply?: HilariousApply[] | Apply16;
  or?: string;
}

export interface Apply16 {
  or: string;
  ci: MathCi[] | MathCi;
  apply?: Apply17;
}

export interface Apply17 {
  and: string;
  ci: MathCi;
  apply: FluffyApply;
}

export interface ATC2Rule {
  '@_Type': Type;
  '@_Value'?: number;
}

export interface FriskyRequest {
  Title: PurpleTitle;
  Case: Case3[];
  '@_To': To;
  '@_For': For;
  '@_Form': string;
  '@_Confidential': boolean;
}

export interface Case3 {
  math: TentacledMath;
  Applicant: string;
  Term: Term;
  div?: CunningDiv;
  '@_When': When;
  '@_Category': string;
  '@_Form'?: string;
}

export interface FriskyDiv {
  p: DivPClass;
  '@_xmlns': string;
  '@_class': DivClass;
}

export interface PurpleATC1 {
  Name: string;
  ATC2: PurpleATC2[] | FluffyATC2;
  '@_ID': string;
}

export interface PurpleATC2 {
  Name: string;
  ATC3: TentacledATC3[] | StickyATC3;
  '@_ID': string;
  Request?: Request3;
  div?: ATC2DivClass;
}

export interface TentacledATC3 {
  Name: string;
  Rule?: ChemicalRuleClass;
  Request?: Request1;
  Chemical: IndigoChemical[] | IndecentChemical;
  '@_ID': string;
}

export interface IndigoChemical {
  Name: string;
  Rule: ChemicalRuleClass;
  Formulation: CunningFormulation[] | MagentaFormulation;
  '@_ID': string;
  div?: ATC2DivClass;
  Request?: MischievousRequest;
}

export interface CunningFormulation {
  Name: string;
  Brand: Brand1[] | Brand1;
  '@_ID': string;
  '@_Rank': number;
  '@_Units': PurpleUnits;
  '@_Weight'?: number;
  Rule?: PurpleRule;
}

export interface Brand1 {
  Name: string;
  Pack: FluffyPack[] | PurplePack;
  '@_ID': string;
}

export interface PurpleRule {
  '@_Attribute': Class;
  '@_Type': Type;
}

export interface MagentaFormulation {
  Name: string;
  Brand: Brand2[] | Brand3;
  '@_ID': string;
  '@_Rank': number;
  '@_Units': PurpleUnits;
  '@_Weight'?: number;
  Rule?: PurpleRule;
}

export interface Brand2 {
  Name: string;
  Pack: FluffyPack[] | PurplePack;
  '@_ID': string;
  '@_ToBeDelisted'?: Date;
}

export interface Brand3 {
  Name: string;
  Pack: FluffyPack;
  '@_ID': string;
  '@_ToBeDelisted'?: Date;
}

export interface MischievousRequest {
  Title: StickyTitle;
  Case: Case4[];
  '@_To': To;
  '@_For': For;
  '@_Form': string;
}

export interface Case4 {
  math: Math2;
  Applicant: Array<ApplicantClass | string> | Applicant;
  Term: Term;
  '@_When': When;
  '@_Category'?: string;
  '@_Form'?: string;
  div?: ATC2DivClass;
}

export interface Math2 {
  apply: Apply18;
  '@_xmlns': string;
}

export interface Apply18 {
  or?: string;
  ci?: MathCi[] | MathCi;
  apply?: Apply19[] | Apply17;
  and?: string;
}

export interface Apply19 {
  or?: string;
  ci: MathCi[] | MathCi;
  apply?: TentacledApply;
  and?: string;
}

export interface IndecentChemical {
  Name: string;
  Rule: ChemicalRuleClass[] | ChemicalRuleClass;
  Formulation: FriskyFormulation[] | MischievousFormulation;
  '@_ID': string;
  Request?: BraggadociousRequest;
}

export interface FriskyFormulation {
  Name: string;
  Brand: Brand4;
  '@_ID': string;
  '@_Rank': number;
  '@_Units': PurpleUnits;
}

export interface Brand4 {
  Name: string;
  Pack: PurplePack[] | PurplePack;
  '@_ID': string;
}

export interface MischievousFormulation {
  Name: string;
  Brand: MischievousBrand[] | Brand3;
  '@_ID': string;
  '@_Rank': number;
  '@_Units': PurpleUnits;
  '@_Weight'?: number;
}

export interface BraggadociousRequest {
  Title: IndigoTitle;
  Case: Case5[];
  '@_To': To;
  '@_For': For;
  '@_Form': string;
}

export interface Case5 {
  math: MagentaMath;
  Applicant: Array<ApplicantClass | string>;
  Term: Term;
  div: ATC2DivClass;
  '@_When': When;
  '@_Form'?: string;
}

export interface IndigoTitle {
  range: PurpleRange;
}

export interface Request1 {
  Title: IndecentTitle;
  Case: Case6[];
  '@_To': To;
  '@_For': For;
  '@_Form': string;
}

export interface Case6 {
  math: Math3;
  Applicant: Array<ApplicantClass | IndigoApplicant> | ApplicantClass | Applicant;
  Term: Term;
  '@_When': When;
  '@_Category'?: string;
  div?: FluffyDiv;
  '@_Form'?: string;
}

export enum IndigoApplicant {
  Dietitian = 'dietitian',
  Gastroenterologist = 'gastroenterologist',
  RelevantSpecialist = 'relevant specialist',
  VocationallyRegisteredGeneralPractitioner = 'vocationally registered general practitioner'
}

export interface Math3 {
  apply?: Apply20;
  '@_xmlns': string;
  ci?: MathCi;
  '@_overflow'?: string;
}

export interface Apply20 {
  or?: string;
  ci: MathCi[] | MathCi;
  and?: string;
  apply?: Apply21[] | TentacledApply;
}

export interface Apply21 {
  or: string;
  mi: MiClass;
  ci: MathCi[];
}

export interface IndecentTitle {
  range: TentacledRange | string;
}

export interface TentacledRange {
  instance: string[] | string;
  '#text': string;
}

export interface StickyATC3 {
  Name: string;
  Rule?: ChemicalRuleClass;
  Chemical: HilariousChemical[] | AmbitiousChemical;
  '@_ID': string;
  Request?: Request2;
}

export interface HilariousChemical {
  Name: string;
  Rule?: ChemicalRuleClass[] | ChemicalRuleClass;
  Formulation: BraggadociousFormulation[] | Formulation1;
  '@_ID': string;
  div?: FluffyDiv;
}

export interface BraggadociousFormulation {
  Name: string;
  Brand: Brand5;
  '@_ID': string;
  '@_Rank': number;
  '@_Units': PurpleUnits;
  '@_Weight'?: number;
  div?: ATC2DivClass;
}

export interface Brand5 {
  Name: string;
  Pack: FluffyPack;
  '@_ID': string;
  '@_SoleSupply'?: Date;
}

export interface Formulation1 {
  Name: string;
  Brand: MischievousBrand[] | Brand6;
  '@_ID': string;
  '@_Rank': number;
  '@_Units': PurpleUnits;
  Rule?: ChemicalRuleClass[];
  div?: MischievousDiv;
  '@_Weight'?: number;
}

export interface Brand6 {
  Name: string;
  Pack: PurplePack[] | PurplePack;
  '@_ID': string;
  '@_SoleSupply'?: Date;
}

export interface MischievousDiv {
  ol: HilariousOl;
  '@_xmlns': string;
  '@_class': DivClass;
}

export interface HilariousOl {
  li: AmbitiousLi[];
  '@_style': FluffyStyle;
}

export interface AmbitiousLi {
  h4?: string;
  p: string[] | string;
  ol?: AmbitiousOl[];
}

export interface AmbitiousOl {
  li: CunningLi[];
  '@_style': PurpleStyle;
}

export interface CunningLi {
  p: string;
  ol?: CunningOl;
}

export interface CunningOl {
  li: FluffyLi[];
  '@_style': PurpleStyle;
}

export interface AmbitiousChemical {
  Name: string;
  Rule: ChemicalRuleClass;
  Formulation: Formulation2[] | Formulation3;
  '@_ID': string;
}

export interface Formulation2 {
  Name: string;
  Brand: MischievousBrand[] | MischievousBrand;
  '@_ID': string;
  '@_Rank': number;
  '@_Units': PurpleUnits;
  '@_Weight'?: number;
}

export interface Formulation3 {
  Name: string;
  Brand: Brand7[] | Brand5;
  '@_ID': string;
  '@_Rank': number;
  '@_Units': PurpleUnits;
}

export interface Brand7 {
  Name: string;
  Pack: FluffyPack[] | FluffyPack;
  '@_ID': string;
}

export interface Request2 {
  Title: IndigoTitle;
  Case: Case7[];
  '@_To': To;
  '@_For': For;
  '@_Form': string;
}

export interface Case7 {
  math: BraggadociousMath;
  Applicant: string[];
  Term: Term;
  '@_When': When;
  '@_Form'?: string;
}

export interface Request3 {
  Title: HilariousTitle;
  Case: MagentaCase[] | Case8;
  '@_To': To;
  '@_For': For;
  '@_Form': string;
}

export interface Case8 {
  math: Math4;
  Applicant: Applicant;
  Term: PurpleTerm;
  '@_When': When;
}

export interface Math4 {
  apply: FluffyApply;
  '@_xmlns': string;
}

export interface HilariousTitle {
  range: FluffyRange;
}

export interface FluffyATC2 {
  Name: string;
  ATC3: ATC2ATC3Class;
  '@_ID': string;
}

export interface ATC2ATC3Class {
  Name: string;
  Chemical: ATC3ChemicalClass[];
  '@_ID': string;
}

export interface ATC3ChemicalClass {
  Name: string;
  Rule?: ATC2Rule[] | BrandRuleClass;
  div?: ATC2DivClass;
  Formulation: Formulation4[] | Formulation5;
  '@_ID': string;
  '@_Statim'?: Statim;
}

export interface Formulation4 {
  Name: string;
  Brand: Brand8;
  '@_ID': string;
  '@_Rank': number;
  '@_Units': PurpleUnits;
  Rule?: BrandRuleClass;
}

export interface Brand8 {
  Name: string;
  Pack: FluffyPack;
  '@_ID': string;
}

export interface Formulation5 {
  Name: string;
  Brand: Brand1;
  '@_ID': string;
  '@_Rank': number;
  '@_Units': PurpleUnits;
  Rule?: BrandRuleClass;
  div?: ATC2DivClass;
}
