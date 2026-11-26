import { describe,it,expect } from 'vitest';
import { matchingPlacement,type PlacementResult } from './journey';
const result:PlacementResult={language:'es',score:3,total:5,level:'Básico em evolução'};
describe('shared learning journey',()=>{it('only shows a placement result for its language',()=>{expect(matchingPlacement(result,'es')).toEqual(result);expect(matchingPlacement(result,'en')).toBeNull()});it('supports visitors without a completed quiz',()=>expect(matchingPlacement(null,'fr')).toBeNull())});
