import type { LanguageId } from '../data/courses';
import type { Profile } from './recommendation';
export type PlacementResult={language:LanguageId;score:number;total:number;level:string};
export type JourneySelection={language:LanguageId;modality:Profile['modality']};
export function matchingPlacement(result:PlacementResult|null,language:LanguageId){
 return result?.language===language?result:null;
}
